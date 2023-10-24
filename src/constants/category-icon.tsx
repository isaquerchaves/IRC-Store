import { KeyboardIcon, MonitorIcon, HeadphonesIcon, SquareIcon, SpeakerIcon, MouseIcon } from "lucide-react";
import React from "react";
    // Objeto para definir icones do lucide-react nas categorias.
    // Retorna um icone específico para cada slug.
export const CATEGORY_ICON = {
    keyboards: <KeyboardIcon size={16}/>,
    monitors: <MonitorIcon size={16}/>,
    headphones: <HeadphonesIcon size={16}/>,
    mousepads: <SquareIcon size={16}/>,
    speakers: <SpeakerIcon size={16}/>,
    mouses: <MouseIcon size={16}/>
};