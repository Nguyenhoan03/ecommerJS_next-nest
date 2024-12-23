"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

      <NavigationMenuItem>
          <Link href="/category/sale" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SALES 50%
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/category/moi-ve" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Mới về
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuItem>
          <Link href="/category/ban-chay" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Bán chạy
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <div className="relative group inline-flex">
      <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-neutral-100 hover:text-neutral-900">
        <span>Ưu đãi</span>
        <svg 
          className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute hidden group-hover:block min-w-[170px] top-full left-1/2 -translate-x-1/2 pt-2">
        <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            <li>
              <Link 
                href="/docs" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-100"
              >
                SALE 12.12
              </Link>
            </li>
            <li>
              <Link 
                href="/docs" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-100"
              >
                Lương về SALE to
              </Link>
            </li>
            <li>
              <Link 
                href="/docs" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-neutral-100"
              >
                Ưu đãi 20/11
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <NavigationMenuItem>
  <NavigationMenuTrigger>Nam</NavigationMenuTrigger>
  <NavigationMenuContent className="w-[1200px]">
    <div className="grid grid-cols-[repeat(5,_200px)_1fr] gap-3 p-4">
      {/* Cột 1: Áo nam */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
       
          <h4 className="text-base font-medium text-black">Áo nam </h4>
          <ul className="space-y-2">
            {[
              "Áo khoác nam",
              "Áo phao nam",
              "Áo gió nam",
              "Áo hoodie - Áo nỉ nam",
              "Áo len nam",
              "Áo thun nam",
              "Áo sơ mi nam",
              "Áo polo nam"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 2: Quần nam */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Quần nam</h4>
          <ul className="space-y-2">
            {[
              "Quần dài nam",
              "Quần kaki nam",
              "Quần short nam",
              "Quần jeans nam",
              "Quần âu nam"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 3: Đồ bộ nam */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ bộ nam</h4>
          <ul className="space-y-2">
            {[
              "Đồ bộ dài tay nam",
              "Đồ bộ ngắn tay nam"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 4: Đồ mặc trong nam */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ mặc trong nam</h4>
          <ul className="space-y-2">
            {[
              "Quần lót nam",
              "Áo ba lỗ nam",
              "Áo giữ nhiệt nam"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 5: Đồ thể thao nam */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ thể thao nam</h4>
          <ul className="space-y-2">
            {[
              "Quần thể thao nam",
              "Áo polo thể thao nam",
              "Áo thun thể thao nam",
              "Bộ thể thao nam"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Phụ kiện nam - Chiếm full width ở dưới */}
      <div className="col-span-full border-t pt-4">
        <NavigationMenuLink asChild>
          <div>
            <h4 className="text-base font-medium text-black mb-3">Phụ ki���n nam</h4>
            <div className="grid grid-cols-6 gap-3">
              {[
                "Tất nam",
                "Phụ kiện khác nam",
                "Túi xách nam",
                "Mũ nam",
                "Thắt lưng nam",
                "Giày nam"
              ].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </NavigationMenuLink>
      </div>
    </div>
  </NavigationMenuContent>
</NavigationMenuItem>

<NavigationMenuItem>
  <NavigationMenuTrigger>Nữ</NavigationMenuTrigger>
  <NavigationMenuContent className="w-[1200px]">
    <div className="grid grid-cols-[repeat(5,_200px)_1fr] gap-3 p-4">
      {/* Cột 1: Áo nữ */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Áo nữ</h4>
          <ul className="space-y-2">
            {[
              "Áo vest nữ",
              "Áo khoác nữ",
              "Áo phao nữ",
              "Áo gió nữ",
              "Áo chống nắng nữ",
              "Áo hoodie - Áo nỉ nữ",
              "Áo len nữ",
              "Áo polo nữ",
              "Áo sơ mi nữ",
              "Áo thun nữ"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 2: Quần nữ */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Quần nữ</h4>
          <ul className="space-y-2">
            {[
              "Quần dài nữ",
              "Quần nỉ nữ",
              "Quần kaki nữ",
              "Quần short nữ",
              "Quần jeans nữ",
              "Quần âu nữ"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 3: Đồ bộ nữ */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ bộ nữ</h4>
          <ul className="space-y-2">
            {[
              "Đồ bộ dài tay nữ",
              "Đồ bộ ngắn tay nữ"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 4: Đồ mặc trong nữ */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ mặc trong nữ</h4>
          <ul className="space-y-2">
            {[
              "Áo bra nữ",
              "Quần lót nữ",
              "Áo ba lỗ - Áo hai dây nữ",
              "Áo giữ nhiệt nữ"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 5: Đồ thể thao nữ */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ thể thao nữ</h4>
          <ul className="space-y-2">
            {[
              "Quần thể thao nữ",
              "Áo polo thể thao nữ",
              "Bộ thể thao nữ"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Phụ kiện nữ - Chiếm full width ở d��ới */}
      <div className="col-span-full border-t pt-4">
        <NavigationMenuLink asChild>
          <div>
            <h4 className="text-base font-medium text-black mb-3">Phụ kiện nữ</h4>
            <div className="grid grid-cols-6 gap-3">
              {[
                "Tất nữ",
                "Phụ kiện khác nữ",
                "Túi xách nữ",
                "Giày nữ",
                "Đầm nữ",
                "Chân váy nữ"
              ].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </NavigationMenuLink>
      </div>
    </div>
  </NavigationMenuContent>
</NavigationMenuItem>


<NavigationMenuItem>
  <NavigationMenuTrigger>Trẻ em</NavigationMenuTrigger>
  <NavigationMenuContent className="w-[1200px]">
    <div className="grid grid-cols-[repeat(5,_200px)_1fr] gap-3 p-4">
      {/* Cột 1: Áo trẻ em */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Áo trẻ em</h4>
          <ul className="space-y-2">
            {[
              "Áo khoác trẻ em",
              "Áo phao trẻ em",
              "Áo gió trẻ em",
              "Áo hoodie - áo nỉ trẻ em",
              "Áo len trẻ em",
              "Áo thun trẻ em",
              "Áo polo trẻ em",
              "Áo sơ mi trẻ em"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 2: Quần trẻ em */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Quần trẻ em</h4>
          <ul className="space-y-2">
            {[
              "Quần dài trẻ em",
              "Quần kaki trẻ em",
              "Quần nỉ trẻ em",
              "Quần short trẻ em",
              "Quần jeans trẻ em"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 3: Đồ bộ trẻ em */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ bộ trẻ em</h4>
          <ul className="space-y-2">
            {[
              "Đồ bộ dài tay trẻ em",
              "Đồ bộ ngắn tay trẻ em"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 4: Đồ mặc trong trẻ em */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đồ mặc trong trẻ em</h4>
          <ul className="space-y-2">
            {[
              "Áo ba lỗ trẻ em",
              "Quần lót trẻ em",
              "Áo giữ nhiệt trẻ em"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Cột 5: Đầm và chân váy bé gái */}
      <NavigationMenuLink asChild>
        <div className="space-y-3">
          <h4 className="text-base font-medium text-black">Đầm và chân váy bé gái</h4>
          <ul className="space-y-2">
            {[
              "Đầm bé gái",
              "Chân váy bé gái"
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>

      {/* Phụ kiện và đồ thể thao trẻ em - Chiếm full width ở dưới */}
      <div className="col-span-full border-t pt-4">
        <NavigationMenuLink asChild>
          <div>
            <div className="grid grid-cols-2 gap-6">
              {/* Phụ kiện trẻ em */}
              <div>
                <h4 className="text-base font-medium text-black mb-3">Phụ kiện trẻ em</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Mũ trẻ em",
                    "Phụ kiện trẻ em khác",
                    "Tất trẻ em"
                  ].map((item) => (
                    <Link 
                      key={item} 
                      href="#" 
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Đồ thể thao trẻ em */}
              <div>
                <h4 className="text-base font-medium text-black mb-3">Đồ thể thao trẻ em</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Quần thể thao trẻ em",
                    "Áo thể thao trẻ em",
                    "Bộ thể thao trẻ em"
                  ].map((item) => (
                    <Link 
                      key={item} 
                      href="#" 
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </NavigationMenuLink>
      </div>
    </div>
  </NavigationMenuContent>
</NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Đồng phục
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tin hot
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
