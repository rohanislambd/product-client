"use client";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import React from "react";
import { json } from "stream/consumers";
const AddProductFrom = () => {
    const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         
         const formData = new FormData(e.currentTarget);
         const data = Object.fromEntries(formData.entries());
        // console.log(data);
        const res = await fetch('http://localhost:8000/products',{
            method:"POST" ,
            headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const result =await res.json();
        console.log(result);
    }
  return (
    <div className="container mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <Label htmlFor="name-1">Product Name</Label>
                <Input id="name-1" name="name" defaultValue="" />
              </Field>
              <Field>
                <Label htmlFor="username-1">Price</Label>
                <Input id="username-1" name="price" defaultValue="" />
              </Field>
              <Field>
                <Label htmlFor="username-1">Product Image</Label>
                <Input id="username-1" name="image" defaultValue="" />
              </Field>
            </FieldGroup>

            <Button type="submit">Add Product</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProductFrom;
