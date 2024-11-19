import { VIEWS } from "@/constants"
import { Button } from "@/components/ui/button"

export type ViewProps = {
    views: typeof VIEWS;
    activeView: string;
    formAction: (formData: FormData) => void;
};

export const View = ({ views, activeView, formAction }: ViewProps) => {
    return (
        <div className="flex gap-1 items-center justify-end">
            <form action={formAction}>
                {
                    Object.entries(views).map(([index, view]) => (
                        <Button
                            key={index}
                            name="viewType"
                            value={view.key}
                            variant="secondary"
                            size="icon"
                            className={view.key == activeView ? "bg-rose-500 focus:bg-rose-500 text-white" : ""}>
                            <view.icon />
                        </Button>
                    ))
                }
            </form>
        </div>
    )
}
View.displayName = "View"
