// lib/validators/product.ts
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(2, "Name is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  stock: z.coerce.number().min(0, "Stock cannot be negative"),
  category: z.string().min(1, "Category is required"),
  description: z.string().optional(),
  status: z.enum(["active", "inactive"]),
});