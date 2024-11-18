import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  LayoutList,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-stretch">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <LayoutList className="h-6 w-6 mr-2" />
          <span className="font-bold">TaskMaster</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify Your Tasks, Amplify Your Productivity
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  TaskMaster helps you organize your life with ease. Create,
                  manage, and complete tasks effortlessly.
                </p>
              </div>
              <div className="space-x-4">
                <a href="/signin">
                  <Button>Get Started</Button>
                </a>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Easy Task Creation</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Quickly add and organize your tasks with our intuitive
                  interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Clock className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Smart Reminders</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Never miss a deadline with our intelligent reminder system.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Collaboration Tools</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Share and collaborate on tasks with your team or family
                  members.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple Pricing
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Free</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                  Perfect for individuals
                </p>
                <p className="text-4xl font-bold text-center mb-6">
                  $0<span className="text-base font-normal">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Up to 50 tasks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Basic reminders</span>
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-blue-500">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                  For power users
                </p>
                <p className="text-4xl font-bold text-center mb-6">
                  $9.99<span className="text-base font-normal">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Advanced reminders</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Collaboration features</span>
                  </li>
                </ul>
                <Button className="mt-auto">Upgrade to Pro</Button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Team</h3>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
                  For small teams
                </p>
                <p className="text-4xl font-bold text-center mb-6">
                  $29.99<span className="text-base font-normal">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Team management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of satisfied users and start organizing your
                  tasks today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">
                    Sign Up
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 TaskMaster. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
