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
    <div className="w-full min-h-screen flex justify-center items-start py-4 px-2 sm:px-4 lg:px-8">
      <div className="w-full max-w-6xl bg-gray-50 border border-gray-300 rounded-lg p-4 sm:p-6 lg:p-10">
        <form onSubmit={(e) => e.preventDefault()}>
          <Card className="shadow-lg border-0 w-full">
            <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50 border-b px-4 sm:px-6 py-4 sm:py-6">
              <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-800 leading-tight">
                Customer Information Form
              </h2>
              <CardDescription className="text-sm sm:text-base md:text-lg mt-2">
                Enter customer details to create or update a record
              </CardDescription>
            </CardHeader>

            <CardContent className="p-4 sm:p-6">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-4 sm:mb-6 w-full h-auto">
                  <TabsTrigger value="basic" className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2">
                    Basic Info
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2">
                    Contact
                  </TabsTrigger>
                  <TabsTrigger value="address" className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2">
                    Address
                  </TabsTrigger>
                  <TabsTrigger value="business" className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2">
                    Business
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="customerId" className="font-medium flex items-center text-sm sm:text-base">
                        Customer ID <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input id="customerId" placeholder="Enter customer ID" className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label className="font-medium text-sm sm:text-base">Customer Type</Label>
                      <RadioGroup
                        defaultValue="company"
                        className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                        onValueChange={setCustomerType}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="company" id="company" />
                          <Label htmlFor="company" className="text-sm sm:text-base">
                            Company
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="individual" id="individual" />
                          <Label htmlFor="individual" className="text-sm sm:text-base">
                            Individual
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="font-medium text-sm sm:text-base">
                        Company Name {customerType === "company" && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input
                        id="companyName"
                        placeholder="Enter company name"
                        disabled={customerType === "individual"}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="salutation" className="font-medium text-sm sm:text-base">
                        Salutation
                      </Label>
                      <Select>
                        <SelectTrigger id="salutation" className="w-full">
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
                      <Label htmlFor="firstName" className="font-medium text-sm sm:text-base">
                        First Name {customerType === "individual" && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input id="firstName" placeholder="Enter first name" className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-medium text-sm sm:text-base">
                        Last Name {customerType === "individual" && <span className="text-red-500 ml-1">*</span>}
                      </Label>
                      <Input id="lastName" placeholder="Enter last name" className="w-full" />
                    </div>

                    <div className="space-y-2 lg:col-span-2">
                      <Label htmlFor="salesRep" className="font-medium text-sm sm:text-base">
                        Sales Representative
                      </Label>
                      <Select>
                        <SelectTrigger id="salesRep" className="w-full">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium text-sm sm:text-base">
                        Email Address
                      </Label>
                      <Input id="email" type="email" placeholder="example@company.com" className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium text-sm sm:text-base">
                        Phone Number
                      </Label>
                      <Input id="phone" placeholder="(123) 456-7890" className="w-full" />
                    </div>

                    <div className="space-y-2 lg:col-span-2">
                      <Label htmlFor="primaryContact" className="font-medium text-sm sm:text-base">
                        Primary Contact
                      </Label>
                      <Select>
                        <SelectTrigger id="primaryContact" className="w-full">
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
                      <Label htmlFor="addressLabel" className="font-medium text-sm sm:text-base">
                        Address Label
                      </Label>
                      <Input id="addressLabel" placeholder="e.g., Home, Office" className="w-full" />
                    </div>

                    <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                      <Label htmlFor="streetAddress" className="font-medium text-sm sm:text-base">
                        Street Address
                      </Label>
                      <Input id="streetAddress" placeholder="Enter street address" className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="font-medium text-sm sm:text-base">
                        City
                      </Label>
                      <Input id="city" placeholder="Enter city" className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="font-medium text-sm sm:text-base">
                        State/Province
                      </Label>
                      <Select>
                        <SelectTrigger id="state" className="w-full">
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
                      <Label htmlFor="postalCode" className="font-medium text-sm sm:text-base">
                        Postal/ZIP Code
                      </Label>
                      <Input id="postalCode" placeholder="Enter postal code" className="w-full" />
                    </div>

                    <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                      <Label htmlFor="country" className="font-medium text-sm sm:text-base">
                        Country
                      </Label>
                      <Select>
                        <SelectTrigger id="country" className="w-full">
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
                      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="defaultBilling" />
                          <Label htmlFor="defaultBilling" className="text-sm sm:text-base">
                            Default Billing
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="defaultShipping" />
                          <Label htmlFor="defaultShipping" className="text-sm sm:text-base">
                            Default Shipping
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="residential" />
                          <Label htmlFor="residential" className="text-sm sm:text-base">
                            Residential
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="mt-4 w-full sm:w-auto bg-transparent" size="sm">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Address
                  </Button>
                </TabsContent>

                <TabsContent value="business" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currency" className="font-medium flex items-center text-sm sm:text-base">
                        Currency <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger id="currency" className="w-full">
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
                      <Label htmlFor="terms" className="font-medium text-sm sm:text-base">
                        Terms
                      </Label>
                      <Select>
                        <SelectTrigger id="terms" className="w-full">
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
                      <Label htmlFor="category" className="font-medium text-sm sm:text-base">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger id="category" className="w-full">
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

            <CardFooter className="flex flex-col sm:flex-row justify-between border-t bg-slate-50 px-4 sm:px-6 py-4 gap-4 sm:gap-0">
              <div className="text-xs sm:text-sm text-slate-500 order-2 sm:order-1">
                <span className="text-red-500">*</span> Required fields
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto order-1 sm:order-2">
                <Button variant="outline" className="flex items-center justify-center w-full sm:w-auto bg-transparent">
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
        </form>
      </div>
    </div>
  )
}
