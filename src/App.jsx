"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Save, X } from "lucide-react"

export default function CustomerForm() {  
  const [customerType, setCustomerType] = useState("company")

  return (
    <div className="w-full max-h-full  flex justify-centre items-center">
    <div className="w-[90%]  h-[90%] bg-gray border border-gray-300 rounded-lg p-10 mx-auto justify-center items-center">
     <form onSubmit={(e) => e.preventDefault()}>
      <Card className=" rounded-lg shadow-2xl bg-gradient-to- from-slate-100 to-slate-50">
        <CardHeader className="bg-gradient-to-b from-slate-100 to-slate-50 border-b text-slate-800">
          <h1 className="text-6xl font-semibold  mt-[20px]">Customer Information Form</h1>
          <h2 className="text-4xl font-medium">Enter customer details to create or update a record</h2>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6 shaddoe-lg">
              <TabsTrigger value="basic">Basic Information</TabsTrigger>
              <TabsTrigger value="contact">Contact Information</TabsTrigger>
              <TabsTrigger value="address">Address Information</TabsTrigger>
              <TabsTrigger value="business">Business Details</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="customerId" className="font-medium flex items-center">
                    Customer ID <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="customerId" placeholder="Enter customer ID" />
                </div>

                <div className="space-y-2">
                  <Label className="font-medium">Customer Type</Label>
                  <RadioGroup defaultValue="company" className="flex space-x-4" onValueChange={setCustomerType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="company" id="company" />
                      <Label htmlFor="company">Company</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Individual</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName" className="font-medium">
                    Company Name {customerType === "company" && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                  <Input id="companyName" placeholder="Enter company name" disabled={customerType === "individual"} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salutation" className="font-medium">
                    Salutation
                  </Label>
                  <Select>
                    <SelectTrigger id="salutation">
                      <SelectValue placeholder="Select salutation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mr">Mr.</SelectItem>
                      <SelectItem value="ms">Ms.</SelectItem>
                      <SelectItem value="mrs">Mrs.</SelectItem>
                      <SelectItem value="dr">Dr.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-medium">
                    First Name {customerType === "individual" && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-medium">
                    Last Name {customerType === "individual" && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salesRep" className="font-medium">
                    Sales Representative
                  </Label>
                  <Select>
                    <SelectTrigger id="salesRep">
                      <SelectValue placeholder="Select sales rep" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Michael Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium">
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="example@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-medium">
                    Phone Number
                  </Label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="primaryContact" className="font-medium">
                    Primary Contact
                  </Label>
                  <Select>
                    <SelectTrigger id="primaryContact">
                      <SelectValue placeholder="Select primary contact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Self</SelectItem>
                      <SelectItem value="assistant">Assistant</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="address" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="addressLabel" className="font-medium">
                    Address Label
                  </Label>
                  <Input id="addressLabel" placeholder="e.g., Home, Office" />
                </div>

                <div className="space-y-2 md:col-span-3">
                  <Label htmlFor="streetAddress" className="font-medium">
                    Street Address
                  </Label>
                  <Input id="streetAddress" placeholder="Enter street address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="font-medium">
                    City
                  </Label>
                  <Input id="city" placeholder="Enter city" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="font-medium">
                    State/Province
                  </Label>
                  <Select>
                    <SelectTrigger id="state">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                      <SelectItem value="fl">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode" className="font-medium">
                    Postal/ZIP Code
                  </Label>
                  <Input id="postalCode" placeholder="Enter postal code" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country" className="font-medium">
                    Country
                  </Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-3">
                  <div className="flex flex-wrap gap-6 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="defaultBilling" />
                      <Label htmlFor="defaultBilling">Default Billing</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="defaultShipping" />
                      <Label htmlFor="defaultShipping">Default Shipping</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="residential" />
                      <Label htmlFor="residential">Residential</Label>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="mt-4" size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Address
              </Button>
            </TabsContent>

            <TabsContent value="business" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currency" className="font-medium flex items-center">
                    Currency <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                      <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="terms" className="font-medium">
                    Terms
                  </Label>
                  <Select>
                    <SelectTrigger id="terms">
                      <SelectValue placeholder="Select terms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="net15">Net 15</SelectItem>
                      <SelectItem value="net30">Net 30</SelectItem>
                      <SelectItem value="net45">Net 45</SelectItem>
                      <SelectItem value="net60">Net 60</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="font-medium">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="wholesale">Wholesale</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-between border-t bg-slate-50 px-6 py-4">
          <div className="text-sm text-slate-500">
            <span className="text-red-500">*</span> Required fields
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </CardFooter>
      </Card>
     </form>
   </div>
   </div>
  )
 
}
