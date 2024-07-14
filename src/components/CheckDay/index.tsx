import {Text, View } from "react-native";
import { CheckFat, X, Bed } from "phosphor-react-native";
import { getDayOfWeek } from "../../classes/WeekDays/WeekDays";

type TCheckDay = { 
    checked: "true" | "false",
    children?: React.ReactNode,
    date: Number;
    };

export function CheckDay({checked, children, date}: TCheckDay){
        return(
            <View className="flex flex-col items-center gap-2">
                <View className={`flex flex-col justify-center items-center h-16 w-12 rounded-md 
                ${
                    {
                        'true': "bg-red-550",
                        'false': "bg-gray-1000"
                    }[checked]
                }`}>
                    <Text className="font-regular text-white text-x">{date.toString()}</Text>
                </View>
                <View className={`flex-0 ${children == getDayOfWeek('string') ? "border border-b-white" : ""}`}>
                    <Text className="font-ibmRegular text-white text-x pb-1">{children}</Text>
                </View>
            </View>
        );
};