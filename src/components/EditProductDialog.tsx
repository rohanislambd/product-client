"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { IProducts } from "@/types/type";
import { useRouter } from "next/navigation";

interface EditProductProps {
  product: IProducts;
}

const EditProductDialog = ({ product }: EditProductProps) => {
    const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const res = await fetch(`http://localhost:8000/products/${product._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
      router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline"> Edit</Button>} />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>Make change to your product</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Product Name</Label>
              <Input id="name-1" name="name" defaultValue={product.name} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Price</Label>
              <Input
                id="username-1"
                name="price"
                defaultValue={product.price}
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Product Image</Label>
              <Input
                id="username-1"
                name="image"
                defaultValue={product.image}
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-10">
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <DialogClose render={<Button type="submit">Save changes</Button>} />
            
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductDialog;
