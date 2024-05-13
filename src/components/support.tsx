
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SupportRequestForm from "./SupportRequestForm"

export default function Component() {

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-800 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold text-white" href="#">
              <Package2Icon className="h-6 w-6 text-green-500" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8 text-white border-white" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white"
                href="/"
              >
                <HomeIcon className="h-4 w-4 text-green-500" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-700 px-3 py-2 text-white transition-all hover:text-white"
                href="#"
              >
                <UsersIcon className="h-4 w-4 text-green-500" />
                Customers Support
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white"
                href="#"
              >
                <ShoppingCartIcon className="h-4 w-4 text-green-500" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  6
                </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white"
                href="#"
              >
                <PackageIcon className="h-4 w-4 text-green-500" />
                Products
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-white"
                href="#"
              >
                <LineChartIcon className="h-4 w-4 text-green-500" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card className="bg-gray-700 text-white">
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-800 px-6">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6 text-white" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg text-white">Customer Support</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full border border-gray-200 border-gray-700 w-8 h-8 text-white dark:border-gray-800" size="icon" variant="ghost">

                <smileyFace className="rounded-full"/>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-700 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-600">Settings</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-600">Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-600">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">

          <SupportRequestForm />

        </main>
      </div>
    </div>
  )
}
function smileyFace(props:any) {
  return (
      <svg {...props} width="24" height="24" viewBox="0 0 24 24" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M506.8 185.8c-164.6 0-298.1 132.4-298.1 295.8 0 104.8 55 196.8 137.8 249.3L288.7 825l137.1-58.8a300.6 300.6 0 0 0 81 11.1c164.6 0 298.1-132.4 298.1-295.8S671.4 185.8 506.8 185.8z" fill="#F68F3B" /><path d="M703.9 361.5c-4.9 0-9.7-2.5-12.3-7.1-31.7-54.8-90.6-73.2-91.2-73.4-7.5-2.3-11.7-10.1-9.4-17.6 2.3-7.4 10.2-11.6 17.6-9.4 2.8 0.8 70.1 21.5 107.6 86.3 3.9 6.7 1.6 15.4-5.2 19.2-2.2 1.4-4.7 2-7.1 2zM551.7 268.8c-1.2 0-2.5-0.1-3.7-0.5-21.3-5.7-38.9-3.2-39.1-3.2-7.8 1.2-15-4.1-16.1-11.8-1.2-7.7 4.1-14.8 11.8-16 1-0.1 23.4-3.5 50.8 3.8 7.6 2 12 9.8 10 17.3-1.7 6.2-7.4 10.4-13.7 10.4z" fill="#FFFFFF" /><path d="M506.8 167c-174.8 0-317 141.1-317 314.6 0 101.7 48.7 195.7 131.3 254.9l-48.6 78.9c-4.2 6.9-3.5 15.8 1.8 21.9 3.7 4.3 9 6.6 14.4 6.6 2.4 0 4.8-0.5 7.1-1.4L427 786c26.1 6.7 52.9 10.1 79.8 10.1 174.8 0 317-141.1 317-314.6 0-173.4-142.2-314.5-317-314.5z m0 591.6c-25.5 0-51.1-3.5-75.9-10.4-4.1-1.2-8.4-0.9-12.3 0.7l-84.4 37.5 28.4-45.8c5.3-8.7 2.6-20-6-25.5-80.8-51.3-129-138.6-129-233.5 0-152.7 125.2-277 279.1-277s279.1 124.3 279.1 277c0.1 152.7-125.1 277-279 277z" fill="#211F1E" /><path d="M661.5 423.4c0-20.7-16.9-37.6-37.9-37.6-20.9 0-37.8 16.8-37.8 37.6 0 20.7 16.9 37.6 37.8 37.6 21 0 37.9-16.8 37.9-37.6zM433.1 423.4c0-20.7-16.9-37.6-37.9-37.6-20.9 0-37.8 16.8-37.8 37.6 0 20.7 16.9 37.6 37.8 37.6 21 0 37.9-16.8 37.9-37.6zM597.5 531.6c-9.7-3.9-20.7 0.7-24.7 10.3-0.2 0.4-16.2 38-63.4 38-48.6 0-61.6-32.8-62.9-36.8-3.2-9.8-13.9-15.1-23.7-12-10 3.1-15.5 13.7-12.3 23.6 0.8 2.6 21 62.8 98.9 62.8 72.3 0 97.4-58.8 98.4-61.3 4-9.7-0.6-20.6-10.3-24.6zM303.2 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3zM336.8 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM320 525.1c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.2-7.3-7.3-7.3zM353.7 525.1c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM336.8 546.9c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM374.8 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM654.7 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM688.4 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM671.6 525.1c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM705.3 525.1c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM688.4 546.9c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM726.4 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3z" fill="#211F1E" /></svg>
  );
}

function BellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function Package2Icon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ShoppingCartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
