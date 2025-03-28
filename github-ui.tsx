"use client"

import * as React from "react"
import {
  Bell,
  Book,
  ChevronDown,
  Code,
  FileCode,
  GitBranch,
  GitPullRequest,
  Home,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Star,
  Users,
} from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GitHubUI() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-background px-4 lg:px-6">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px]">
            <nav className="grid gap-4 py-4">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Code className="h-4 w-4" />
                Repositories
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <GitPullRequest className="h-4 w-4" />
                Pull Requests
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="h-4 w-4" />
                Issues
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                Organizations
              </Link>
              <Separator />
              <Link
                href="#"
                className="flex items-center gap-2 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="#" className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <span className="hidden font-semibold sm:inline-block">GitHub</span>
        </Link>
        <div className="flex-1 px-2 md:px-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-full justify-start text-muted-foreground md:max-w-sm lg:max-w-md"
              >
                <Search className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline-block">Search or jump to...</span>
                <span className="inline-block sm:hidden">Search</span>
                <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 md:w-[400px] lg:w-[500px]" align="start">
              <Command>
                <CommandInput placeholder="Search repositories..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Repositories">
                    <CommandItem>
                      <FileCode className="mr-2 h-4 w-4" />
                      <span>next.js</span>
                    </CommandItem>
                    <CommandItem>
                      <FileCode className="mr-2 h-4 w-4" />
                      <span>react</span>
                    </CommandItem>
                    <CommandItem>
                      <FileCode className="mr-2 h-4 w-4" />
                      <span>tailwindcss</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Plus className="h-5 w-5" />
                <span className="sr-only">Create new</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>New repository</DropdownMenuItem>
              <DropdownMenuItem>Import repository</DropdownMenuItem>
              <DropdownMenuItem>New gist</DropdownMenuItem>
              <DropdownMenuItem>New organization</DropdownMenuItem>
              <DropdownMenuItem>New project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Repositories</DropdownMenuItem>
                <DropdownMenuItem>Projects</DropdownMenuItem>
                <DropdownMenuItem>Stars</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r bg-muted/10 lg:block">
          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <div className="px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">username</span>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-sm font-medium">Repositories</h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <FileCode className="mr-2 h-4 w-4" />
                      project-one
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <FileCode className="mr-2 h-4 w-4" />
                      awesome-app
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <FileCode className="mr-2 h-4 w-4" />
                      documentation
                    </Button>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-2 text-sm font-medium">Recent Activity</h3>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <GitPullRequest className="mr-2 h-4 w-4" />
                      Pull Request #42
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Issue #123
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6">
              <div className="flex flex-col items-start justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <FileCode className="h-5 w-5" />
                  <h1 className="text-xl font-semibold">project-one</h1>
                  <Badge variant="outline">Public</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Star className="mr-2 h-4 w-4" />
                    Star
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <GitBranch className="mr-2 h-4 w-4" />
                    Fork
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8">
                        <Book className="mr-2 h-4 w-4" />
                        Code
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Clone</DropdownMenuItem>
                      <DropdownMenuItem>Download ZIP</DropdownMenuItem>
                      <DropdownMenuItem>Open with GitHub Desktop</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <Tabs defaultValue="code">
              <TabsList className="mb-4 w-full justify-start">
                <TabsTrigger value="code" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Code
                </TabsTrigger>
                <TabsTrigger value="issues" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Issues
                </TabsTrigger>
                <TabsTrigger value="pull-requests" className="flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4" />
                  Pull Requests
                </TabsTrigger>
              </TabsList>

              <TabsContent value="code" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Repository Overview</CardTitle>
                    <CardDescription>A modern web application built with Next.js and Tailwind CSS.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Commits</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">128</div>
                            <p className="text-xs text-muted-foreground">+12 this week</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Contributors</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">+2 this month</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Stars</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">42</div>
                            <p className="text-xs text-muted-foreground">+5 this week</p>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h3 className="mb-2 text-lg font-medium">README.md</h3>
                        <Card>
                          <CardContent className="p-4">
                            <div className="prose max-w-none dark:prose-invert">
                              <h1>Project One</h1>
                              <p>
                                A modern web application built with Next.js and Tailwind CSS. This project demonstrates
                                best practices for building responsive, accessible, and performant web applications.
                              </p>
                              <h2>Features</h2>
                              <ul>
                                <li>Server-side rendering with Next.js</li>
                                <li>Responsive design with Tailwind CSS</li>
                                <li>Accessible UI components</li>
                                <li>Dark mode support</li>
                              </ul>
                              <h2>Getting Started</h2>
                              <p>Clone the repository and install dependencies:</p>
                              <pre>
                                <code>npm install npm run dev</code>
                              </pre>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View All Files
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="issues" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search issues" className="w-full md:w-[300px]" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Filters
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Open issues</DropdownMenuItem>
                        <DropdownMenuItem>Closed issues</DropdownMenuItem>
                        <DropdownMenuItem>Your issues</DropdownMenuItem>
                        <DropdownMenuItem>Everything assigned to you</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Button size="sm">New Issue</Button>
                </div>

                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Status</TableHead>
                        <TableHead className="hidden md:table-cell">Assignee</TableHead>
                        <TableHead className="hidden md:table-cell">Updated</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-green-500" />
                            <span>Fix responsive layout on mobile devices</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">Open</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">2 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-green-500" />
                            <span>Implement dark mode toggle</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">Open</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">5 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-red-500" />
                            <span>Update dependencies to latest versions</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">Closed</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">1 week ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>

              <TabsContent value="pull-requests" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search pull requests" className="w-full md:w-[300px]" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Filters
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Open pull requests</DropdownMenuItem>
                        <DropdownMenuItem>Closed pull requests</DropdownMenuItem>
                        <DropdownMenuItem>Merged pull requests</DropdownMenuItem>
                        <DropdownMenuItem>Your pull requests</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Button size="sm">New Pull Request</Button>
                </div>

                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Status</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell">Updated</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <GitPullRequest className="h-4 w-4 text-green-500" />
                            <span>Add new authentication flow</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">Open</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">1 day ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <GitPullRequest className="h-4 w-4 text-purple-500" />
                            <span>Refactor component structure</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">Merged</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">3 days ago</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <GitPullRequest className="h-4 w-4 text-red-500" />
                            <span>Fix build errors on CI</span>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">Closed</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">1 week ago</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

