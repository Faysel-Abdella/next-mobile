'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
    Check,
    CheckCheck,
    ChevronRight,
    Square,
    SquareCheck,
} from 'lucide-react'
import { Icons } from '@/components/ui/icons'

interface ConsentSection {
    id: string
    label: string
    children?: { id: string; label: string }[]
}

export default function CheckBox({
    section,
    setAll,
    selectedItems,
    setSelectedItems,
}: {
    section: ConsentSection
    setAll: Dispatch<SetStateAction<number>>
    selectedItems: Set<string>
    setSelectedItems: Dispatch<SetStateAction<Set<string>>>
}) {
    const handleParentCheckboxChange = (
        sectionId: string,
        children: { id: string }[] = []
    ) => {
        setSelectedItems((prevSelected) => {
            const newSelected = new Set(prevSelected)
            const isParentSelected = newSelected.has(sectionId)

            if (isParentSelected) {
                // Uncheck parent and all children
                newSelected.delete(sectionId)
                children.forEach((child) => newSelected.delete(child.id))
            } else {
                // Check parent and all children
                newSelected.add(sectionId)
                children.forEach((child) => newSelected.add(child.id))
            }

            return newSelected
        })

        setAll((prev) => {
            const isCurrentlySelected = selectedItems.has(sectionId)
            const adjustment = isCurrentlySelected ? -1 : 1
            return prev + adjustment
        })
    }

    const handleChildCheckboxChange = (
        childId: string,
        parentId: string,
        siblings: { id: string }[] = []
    ) => {
        setSelectedItems((prevSelected) => {
            const newSelected = new Set(prevSelected)
            if (newSelected.has(childId)) {
                newSelected.delete(childId)
                newSelected.delete(parentId) // Always uncheck parent if any child is unchecked
            } else {
                newSelected.add(childId)
                // Check parent if all siblings are checked
                const allSiblingsChecked = siblings.every(
                    (sibling) =>
                        sibling.id === childId || newSelected.has(sibling.id)
                )
                if (allSiblingsChecked) {
                    newSelected.add(parentId)
                }
            }
            return newSelected
        })
    }

    return (
        <AccordionItem
            key={section.id}
            value={section.id}
            className="border rounded-lg"
        >
            <div className="flex-1 p-0 px-0.5">
                <AccordionTrigger className="px-2 py-3 hover:no-underline">
                    <div className="flex items-center">
                        {selectedItems.has(section.id) ? (
                            <div
                                onClick={() =>
                                    handleParentCheckboxChange(
                                        section.id,
                                        section.children
                                    )
                                }
                                className="w-4 h-4 rounded-[2px] border-2 border-black/20 bg-[#4D4D4D] flex items-center justify-center"
                            >
                                <Check className="text-white font-bold" />
                            </div>
                        ) : (
                            <div
                                onClick={() =>
                                    handleParentCheckboxChange(
                                        section.id,
                                        section.children
                                    )
                                }
                                className="w-4 h-4 rounded-[2px] border-2 border-black/50"
                            />
                        )}
                        <Label
                            htmlFor={section.id}
                            className="ml-2 text-[14px] text-[#4D4D4D]"
                        >
                            {section.label}
                        </Label>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-1 pb-3">
                    <div className="space-y-3 pl-6">
                        {section.children?.map((child) => (
                            <div key={child.id} className="flex items-center">
                                {selectedItems.has(child.id) ? (
                                    <div
                                        onClick={() =>
                                            handleChildCheckboxChange(
                                                child.id,
                                                section.id
                                            )
                                        }
                                        className="w-4 h-4 rounded-[2px] bg-[#FF5E18] flex items-center justify-center"
                                    >
                                        <Check className="text-white font-bold" />
                                    </div>
                                ) : (
                                    <div
                                        onClick={() =>
                                            handleChildCheckboxChange(
                                                child.id,
                                                section.id
                                            )
                                        }
                                        className="w-4 h-4 rounded-[2px] border-2 border-primary/90"
                                    />
                                )}
                                <Label
                                    htmlFor={child.id}
                                    className="ml-2 text-[#4D4D4D] text-sm w-full flex items-center justify-between"
                                >
                                    {child.label}
                                    <ChevronRight
                                        size={14}
                                        className="text-[#4D4D4D]"
                                    />
                                </Label>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </div>
        </AccordionItem>
    )
}
