import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProps{
    category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {

    // Objeto para definir icones do lucide-react nas categorias.
    // Retorna um icone específico para cada slug.
    const categoryIcom = {
        keyboards: <KeyboardIcon size={16}/>,
        monitors: <MonitorIcon size={16}/>,
        headphones: <HeadphonesIcon size={16}/>,
        mousepads: <SquareIcon size={16}/>,
        speakers: <SpeakerIcon size={16}/>,
        mouses: <MouseIcon size={16}/>
    };

    return ( 
        <Badge variant="outline" className="flex justify-center items-center py-3 gap-2 rounded-lg">
            {categoryIcom[category.slug as keyof typeof categoryIcom]}
            <span className="font-bold text-xs">{category.name}</span>
        </Badge>
     );
};

export default CategoryItem;