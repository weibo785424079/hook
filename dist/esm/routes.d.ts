export declare function getRoutes(): ({
    path: string;
    layout: boolean;
    wrappers: any[];
    component: (props: any) => any;
    redirect?: undefined;
    __dumiRoot?: undefined;
    routes?: undefined;
    title?: undefined;
} | {
    path: string;
    redirect: string;
    layout?: undefined;
    wrappers?: undefined;
    component?: undefined;
    __dumiRoot?: undefined;
    routes?: undefined;
    title?: undefined;
} | {
    __dumiRoot: boolean;
    layout: boolean;
    path: string;
    wrappers: any[];
    routes: {
        path: string;
        component: any;
        exact: boolean;
        meta: {
            filePath: string;
            updatedTime: number;
            slugs: any[];
            title: string;
            group: {
                path: string;
                title: string;
            };
        };
        title: string;
    }[];
    title: string;
    component: (props: any) => any;
    redirect?: undefined;
})[];
