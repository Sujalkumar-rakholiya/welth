"use client";

import { Card, CardDescription, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import { Pencil, Check, X } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { updateBudget } from "@/actions/budget";

const BudgetProgress = ({ initialBudget, currentExpenses }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newBudget, setNewBudget] = useState(
        initialBudget?.amount?.toString() || ""
    );

    const percentUsed = initialBudget
        ? (currentExpenses / initialBudget.amount) * 100
        : 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Monthly Budget (Default Account)</CardTitle>
                <div>
                    {isEditing ? <div>
                        <Input />
                        <Button><Check/></Button>
                    </div> :}
                </div>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
        </Card>
    );
};

export default BudgetProgress;
