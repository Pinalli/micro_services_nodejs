import { Content } from "./content";

export interface NotificationsProps {
    recipientID: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification{
    private props: NotificationsProps;
    

    constructor(props: NotificationsProps){
        this.props = props;   
    }

    public get recipientID(): string {
        return this.props.recipientID;
    }

    public set recipientID(recipientID: string){
        
        this.props.recipientID = recipientID;
    }   

    public get content(): Content {
        return this.props.content;
    }

    public set content(content: Content){
        
        this.props.content = content;
    } 

    public get category(): string {
        return this.props.category;
    }
    public set category(category: string){
        
        this.props.category = category;
    } 

    public get readAt(): Date | null | undefined{
        return this.props.readAt;
    }

    public set readAt(readAt:  Date | null | undefined){
        
        this.props.readAt = readAt;
    } 

    public get createdAt(): Date{
        return this.props.createdAt;
    }
}
