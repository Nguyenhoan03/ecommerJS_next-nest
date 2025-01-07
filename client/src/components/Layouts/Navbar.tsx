"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { useFetchData } from "@/hook/usefetchData"
import { Category } from "@/types/product"
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
  const { data } = useFetchData<Category[]>('/category/getcategorynam', { method: 'GET' });
  const { data: categories } = useFetchData<any>('/category/getcategorynam_nu_treem', { method: 'GET' });

  const renderCategoryMenu = (categoryType: 'nam' | 'nu' | 'treEm', title: string) => (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <Link href={`/category/${categoryType}`}>{title}</Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="w-[1200px]">
        <div className="grid grid-cols-[repeat(5,_200px)_1fr] gap-3 p-4">
          {categories?.[categoryType]
            ?.filter(cat => !cat.name.toLowerCase().includes('phụ kiện'))
            .map((category) => (
              <NavigationMenuLink key={category.id} asChild>
                <div className="space-y-3">
                  <h4 className="text-base font-medium text-black">{category.name}</h4>
                  <ul className="space-y-2">
                    {category.subCategories?.map((subCategory) => (
                      <li key={subCategory.id}>
                        <Link 
                          href={`/category/${subCategory.slug}`}
                          className="text-sm text-gray-600 hover:text-blue-600"
                        >
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuLink>
            ))}

          <div className="col-span-full border-t pt-4">
            {categories?.[categoryType]?.find(cat => 
              cat.name.toLowerCase().includes('phụ kiện')
            ) && (
              <NavigationMenuLink asChild>
                <div>
                  <h4 className="text-base font-medium text-black mb-3">
                    {categories[categoryType].find(cat => 
                      cat.name.toLowerCase().includes('phụ kiện')
                    )?.name}
                  </h4>
                  <div className="grid grid-cols-6 gap-3">
                    {categories[categoryType]
                      .find(cat => cat.name.toLowerCase().includes('phụ kiện'))
                      ?.subCategories.map((item) => (
                        <Link 
                          key={item.id}
                          href={`/category/${item.slug}`}
                          className="text-sm text-gray-600 hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </NavigationMenuLink>
            )}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
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

        {categories && (
          <>
            {renderCategoryMenu('nam', 'Nam')}
            {renderCategoryMenu('nu', 'Nữ')} 
            {renderCategoryMenu('treEm', 'Trẻ em')}
          </>
        )}

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
