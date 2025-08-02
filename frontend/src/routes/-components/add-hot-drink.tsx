import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

export function AddHotDrinkForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    rating: "",
    reviews: "",
    price: "",
    calories: "",
    caffeine: "",
    sugar: "",
    fat: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!imageFile) return toast.error("Please upload an image", { position: "top-center", duration: 3000 });

    try {
      // Upload to Cloudinary
      const imageFormData = new FormData();
      imageFormData.append("file", imageFile);
      imageFormData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

      const cloudinaryRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        imageFormData
      );

      const imageUrl = cloudinaryRes.data.secure_url;

      // Post to your backend
      await axios.post(
        "/api/add-hot-drink",
        {
          ...formData,
          image: imageUrl,
          rating: Number(formData.rating),
          reviews: Number(formData.reviews),
          price: Number(formData.price),
          calories: Number(formData.calories),
          caffeine: Number(formData.caffeine),
          sugar: Number(formData.sugar),
          fat: Number(formData.fat),
        },
        {
          withCredentials: true, // ✅ include auth cookie from Better Auth
        }
      );

      toast.success("Drink added!", {
        position: "top-center",
        duration: 3000,
      });
      setFormData({
        name: "",
        type: "",
        description: "",
        rating: "",
        reviews: "",
        price: "",
        calories: "",
        caffeine: "",
        sugar: "",
        fat: "",
      });
      setImageFile(null);
      setPreview(null);
    } catch (err: any) {
      console.error(err);
      toast.error("Something went wrong. " + err.response?.data?.error || err.message, {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto p-6 border rounded-xl shadow">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 rounded"
      />
      <Input
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
        className="border p-2 rounded"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 rounded"
      />

      {["rating", "reviews", "price", "calories", "caffeine", "sugar", "fat"].map((field) => (
        <Input
          key={field}
          type="number"
          name={field}
          value={(formData as any)[field]}
          onChange={handleChange}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          className="border p-2 rounded"
        />
      ))}

      <Input type="file" accept="image/*" onChange={handleImageChange} className="border p-2 rounded" />
      {preview && <img src={preview} alt="Preview" className="h-32 mt-2 object-cover rounded" />}

      <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition">
        Add Drink
      </button>
    </form>
  );
}
