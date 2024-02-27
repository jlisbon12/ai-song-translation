import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { languageState } from "./atoms/languageAtom";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import ISO6391 from "iso-639-1";

function LanguageSelector(): React.JSX.Element {
  const [languages, setLanguages] = useRecoilState(languageState);

  const sourceLang = ISO6391.getName(languages.sourceLanguage);

  return (
    <div className="flex flex-row">
      <div className="flex flex-row ml-3">
        <Card className="glass p-2 rounded-none rounded-l-md">
          Original Language
        </Card>
        <Card className="glass rounded-none rounded-r-md pt-[10px] px-7 text-[13px]">
          {sourceLang || "Auto Detected"}
        </Card>
      </div>
      <div className="flex flex-row ml-3">
        <Card className="glass rounded-none rounded-l-md p-2">
          Target Language
        </Card>
        <Select.Root
          onValueChange={(value) =>
            setLanguages({ ...languages, targetLanguage: value })
          }
          value={languages.targetLanguage}
        >
          <Select.Trigger className="glass rounded-none rounded-r-md inline-flex items-center justify-center text-[13px]  py-5 px-[15px] gap-[5px] h-[35px]">
            <Select.Value
              placeholder={`${
                languages.targetLanguage === "" ? "Select a language" : null
              }`}
            />
            <Select.Icon className="text-inherit">
              <ChevronDown />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              className="overflow-hidden rounded-md cursor-pointer"
            >
              <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-inherit text-inherit cursor-default">
                <ChevronUp />
              </Select.ScrollUpButton>
              <Select.Viewport className="glass p-[14px] ">
                <Select.Group>
                  <Select.Item
                    value="fr"
                    className="flex items-center relative h-[25px] rounded-[3px] text-[13px]"
                  >
                    <Select.ItemText>French</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="es"
                    className="flex items-center relative h-[25px] rounded-[3px] text-[13px]"
                  >
                    <Select.ItemText>Spanish</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="de"
                    className="flex items-center relative h-[25px] rounded-[3px] text-[13px]"
                  >
                    <Select.ItemText>German</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="pt"
                    className="flex items-center relative h-[25px] rounded-[3px] text-[13px]"
                  >
                    <Select.ItemText>Portuguese</Select.ItemText>
                  </Select.Item>
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton className="flex items-center justify-center h-[25px] cursor-default">
                <ChevronDown />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  );
}

export default LanguageSelector;
