'use client'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Check, CheckCheck, Square, SquareCheck } from 'lucide-react'
import { Icons } from '@/components/ui/icons'

interface ConsentSection {
    id: string
    label: string
    children?: { id: string; label: string }[]
}

export default function CheckBox({ section }: { section: ConsentSection }) {
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())

    const handleParentCheckboxChange = (
        sectionId: string,
        children: { id: string }[] = []
    ) => {
        setSelectedItems((prevSelected) => {
            const newSelected = new Set(prevSelected)
            if (newSelected.has(sectionId)) {
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
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-start">
                        {selectedItems.size - 1 === section.children?.length ? (
                            <div
                                onClick={() =>
                                    handleParentCheckboxChange(
                                        section.id,
                                        section.children
                                    )
                                }
                                className="w-5 h-5 rounded-sm border-2 border-black/20 bg-[#4D4D4D] flex items-center justify-center"
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
                                className="w-5 h-5 rounded-sm border-2 border-black/50"
                            />
                        )}
                        <Label htmlFor={section.id} className="ml-2 text-sm">
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
                                        className="w-4 h-4 rounded-sm border-2 border-black/20 bg-primary flex items-center justify-center"
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
                                        className="w-4 h-4 rounded-sm border-2 border-primary/90"
                                    />
                                )}
                                <Label
                                    htmlFor={child.id}
                                    className="ml-2 text-sm"
                                >
                                    {child.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </div>
        </AccordionItem>
    )
}
