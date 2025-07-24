export type RouteProps = {
    title: string;
    price: number;
    time: string;
    distance: string;
    level: string;
    route: string;
    images?: string[];
    text?: string;
    rtl?: boolean;
    className?: string;
}

export type ModalRouteProps = {
    route: RouteProps;
    active: boolean;
    setActive: (value: boolean) => void;
};