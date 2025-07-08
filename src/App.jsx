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

export default function App() {  
  const [customerType, setCustomerType] = useState("company")

  return (
    <div className="min-h-screen w-full bg-gray-50 p-2 sm:p-4 lg:p-6">
      <div className="mx-auto max-w-6xl">
        <div onSubmit={(e) => e.preventDefault()}>
          <Card className="shadow-xl bg-white border-0">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b px-4 sm:px-6 lg:px-8 py-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-800 leading-tight">
                Customer Information Form
              </h1>
              <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-slate-600 mt-2">
                Enter customer details to create or update a record
              </h2>
            </CardHeader>

            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-6 w-full h-auto">
                  <TabsTrigger value="basic" className="text-xs sm:text-sm px-2 py-2 sm:px-4">
                    Basic Info
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="text-xs sm:text-sm px-2 py-2 sm:px-4">
                    Contact
                  </TabsTrigger>
                  <TabsTrigger value="address" className="text-xs sm:text-sm px-2 py-2 sm:px-4">
                    Address
                  </TabsTrigger>
                  <TabsTrigger value="business" className="text-xs sm:text-sm px-2 py-2 sm:px-4">
                    Business
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="customerId" className="text-sm font-medium flex items-center">
                        Customer ID <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input id="customerId" placeholder="Enter customer ID" className="h-10" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Customer Type</Label>
                      <RadioGroup defaultValue="company" className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0" onValueChange={setCustomerType}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="company" id="company" />
                          <Label htmlFor="company" className="text-sm">Company</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="text-sm">Individual</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-sm font-medium">
                        Company Name {customerType === "company" && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input id="companyName" placeholder="Enter company name" disabled={customerType === "individual"} className="h-10" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="salutation" className="text-sm font-medium">
                        Salutation
                      </Label>
                      <Select>
                        <SelectTrigger id="salutation" className="h-10">
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
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name {customerType === "individual" && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input id="firstName" placeholder="Enter first name" className="h-10" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name {customerType === "individual" && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input id="lastName" placeholder="Enter last name" className="h-10" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="salesRep" className="text-sm font-medium">
                        Sales Representative
                      </Label>
                      <Select>
                        <SelectTrigger id="salesRep" className="h-10">
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

                <TabsContent value="contact" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="example@company.com" className="h-10" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input id="phone" placeholder="(123) 456-7890" className="h-10" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="primaryContact" className="text-sm font-medium">
                        Primary Contact
                      </Label>
                      <Select>
                        <SelectTrigger id="primaryContact" className="h-10">
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

                <TabsContent value="address" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="addressLabel" className="text-sm font-medium">
                        Address Label
                      </Label>
                      <Input id="addressLabel" placeholder="e.g., Home, Office" className="h-10" />
                    </div>

                    <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                      <Label htmlFor="streetAddress" className="text-sm font-medium">
                        Street Address
                      </Label>
                      <Input id="streetAddress" placeholder="Enter street address" className="h-10" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium">
                        City
                      </Label>
                      <Input id="city" placeholder="Enter city" className="h-10" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-sm font-medium">
                        State/Province
                      </Label>
                      <Select>
                        <SelectTrigger id="state" className="h-10">
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
                      <Label htmlFor="postalCode" className="text-sm font-medium">
                        Postal/ZIP Code
                      </Label>
                      <Input id="postalCode" placeholder="Enter postal code" className="h-10" />
                    </div>

                    <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                      <Label htmlFor="country" className="text-sm font-medium">
                        Country
                      </Label>
                      <Select>
                        <SelectTrigger id="country" className="h-10">
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

                    <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="defaultBilling" />
                          <Label htmlFor="defaultBilling" className="text-sm">Default Billing</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="defaultShipping" />
                          <Label htmlFor="defaultShipping" className="text-sm">Default Shipping</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="residential" />
                          <Label htmlFor="residential" className="text-sm">Residential</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="mt-4 w-full sm:w-auto" size="sm">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Address
                  </Button>
                </TabsContent>

                <TabsContent value="business" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currency" className="text-sm font-medium flex items-center">
                        Currency <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="currency" className="h-10">
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
                      <Label htmlFor="terms" className="text-sm font-medium">
                        Terms
                      </Label>
                      <Select>
                        <SelectTrigger id="terms" className="h-10">
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

                    <div className="space-y-2 md:col-span-2 lg:col-span-1">
                      <Label htmlFor="category" className="text-sm font-medium">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger id="category" className="h-10">
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

            <CardFooter className="flex flex-col sm:flex-row sm:justify-between border-t bg-slate-50 px-4 sm:px-6 lg:px-8 py-4 gap-4 sm:gap-0">
              <div className="text-xs sm:text-sm text-slate-500 order-2 sm:order-1">
                <span className="text-red-500">*</span> Required fields
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto order-1 sm:order-2">
                <Button variant="outline" className="flex items-center justify-center w-full sm:w-auto">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center w-full sm:w-auto">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}