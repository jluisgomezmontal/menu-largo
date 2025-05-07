"use client"

import { createContext, useContext, useState } from "react"

const TabsContext = createContext({})

export function Tabs({ children, defaultValue, value, onValueChange, className = "", ...props }) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue)

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue)
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  return (
    <TabsContext.Provider value={{ selectedTab, handleTabChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className = "", ...props }) {
  return (
    <div
      role="tablist"
      className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function TabsTrigger({ children, value, className = "", ...props }) {
  const { selectedTab, handleTabChange } = useContext(TabsContext)
  const isSelected = selectedTab === value

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? "active" : "inactive"}
      onClick={() => handleTabChange(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, className = "", ...props }) {
  const { selectedTab } = useContext(TabsContext)
  const isSelected = selectedTab === value

  if (!isSelected) return null

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? "active" : "inactive"}
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
