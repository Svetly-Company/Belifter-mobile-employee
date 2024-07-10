import {Text, View } from "react-native";
import { CheckFat, X, Bed } from "phosphor-react-native";
import { getDayOfWeek } from "../../classes/WeekDays/WeekDays";

type TCheckDay = { 
    checked: "true" | "false" | "sleep" | "unchecked",
    children?: React.ReactNode,
    date: Number;
    };

export function CheckDay({checked, children, date}: TCheckDay){
        return(
            <View className="flex flex-col items-center gap-2">
                <View className={`flex flex-col justify-center items-center h-16 w-12 rounded-md 
                ${
                    {
                        'true': "bg-green-800",
                        'false': "bg-red-800",
                        'sleep': "bg-white",
                        'unchecked': "bg-gray-1000"
                    }[checked]
                }`}>
                    {
                        {
                            'true': <CheckFat weight="fill" color="white" size={21}/>,
                            'false': <X weight="bold" color="white" size={21}/>,
                            'sleep': <Bed weight="bold" color="black" size={21}/>,
                            'unchecked': <Text className="font-regular text-white text-x">{date.toString()}</Text>
                        }[checked]
                    }
                </View>
                <View className={`flex-0 ${children == getDayOfWeek('string') ? "border border-b-white" : ""}`}>
                    <Text className="font-ibmRegular text-white text-x pb-1">{children}</Text>
                </View>
            </View>
        );
};