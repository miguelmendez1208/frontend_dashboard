"use client"
import React, { useState , useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const SupportRequestForm = () => {
  // State for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Reset 'submitted' state after 5 seconds
  useEffect(() => {
    if (submitted) {      
      const timer = setTimeout(() => {
      setSubmitted(false);
    }, 2000);
      return () => clearTimeout(timer); // Clean up the timeout
    }
  }, [submitted]);

  if (submitted) {
    return (<p> Thanks for your Submission! </p>);
  }
  // Handle input changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      description,
    };
    
    const apiUrl = `https://frontend-dashboard-opal.vercel.app/api/createData?name=${name}&email=${email}&description=${description}`;
    console.log(formData);
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="bg-gray-700 text-white">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Submit a Support Request</CardTitle>
          <CardDescription>Fill out the form below to let us know how we can help.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-white" htmlFor="name">Name</Label>
              <Input className="bg-gray-800 text-white" id="name" value={name} onChange={handleNameChange} placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="email">Email</Label>
              <Input className="bg-gray-800 text-white" id="email" type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-white" htmlFor="description">Description</Label>
            <Textarea className="min-h-[150px] bg-gray-800 text-white" id="description" value={description} onChange={handleDescriptionChange} placeholder="Describe the issue you're facing" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-green-500 hover:bg-green-600 text-white" type="submit">Submit Request</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SupportRequestForm;