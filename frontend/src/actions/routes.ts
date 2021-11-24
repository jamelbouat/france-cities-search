import { CallHistoryMethodAction, push } from 'connected-react-router';

import { ROUTES } from '../constants';

interface IReplacement {
    [key: string]: string;
}

const pathReplacerFunction = (pathname: string, pathReplacement: IReplacement) => {
    let newPathName = pathname;
    Object
        .keys(pathReplacement)
        .forEach(key =>
            newPathName = newPathName.replace(key, pathReplacement[key])
        );
    return newPathName;
};

const queryReplacerFunction = (searchParamsReplacement: IReplacement, queryString?: string) => {
    const searchParams = new URLSearchParams(queryString || '');
    Object
        .keys(searchParamsReplacement)
        .forEach(key => {
            searchParams.set(key, searchParamsReplacement[key]);
        });
    return searchParams.toString();
};

export const routeChange = (
    pathname: ROUTES,
    pathReplacement?: IReplacement,
    queryString?: string,
    searchParamsReplacement?: IReplacement): CallHistoryMethodAction =>
{
    const newPathname = pathReplacement ? pathReplacerFunction(pathname, pathReplacement) : pathname;
    const newQueryString = searchParamsReplacement && queryReplacerFunction(searchParamsReplacement, queryString);

    return push({ pathname: newPathname, search: newQueryString });
};
