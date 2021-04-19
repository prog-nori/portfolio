export interface SNSListProps {
    href: string
    category: string
    icon: string
}
export const snsList: SNSListProps[] = [
    {
        href: 'http://twitter.com/ksu_nori',
        category: 'fab',
        icon: 'twitter',
    },
    {
        href: 'https://www.facebook.com/dev.nori',
        category: 'fab',
        icon: 'facebook-f',
    },
    {
        href: 'https://github.com/prog-nori',
        category: 'fab',
        icon: 'github',
    },
    {
        href: 'mailto:nori.freedevelop@gmail.com',
        category: 'far',
        icon: 'envelope',
    },
]