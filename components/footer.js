import FooterLink from "./footer_link";

export default function Footer(props) {
    return (
        <footer className="flex flex-row items-start bg-gray-100 w-full py-2 px-4 mt-10">
            <ul className="flex-1 flex flex-wrap">
                <FooterLink bold title='Help' />
                <FooterLink bold title='About' />
                <FooterLink bold title='Start Writing' />
                <FooterLink bold title='Sponsor:' />
                <FooterLink title='Sitewide Billboard' />
                <FooterLink title='Ad by tag' />
                <FooterLink title='Newsletter' />
                <FooterLink title='Noonies' />
                <FooterLink title='Contact Us' />
                <FooterLink title='Terms' />
                <FooterLink title='Privacy' />
                <FooterLink title='Cookies' />
                <FooterLink title='Stories published yesterday' />
                <FooterLink title='Leaderboard' />
                <FooterLink title="Contributors' Club" />
                <FooterLink title='Chrome Extension' />
            </ul>
        </footer>
    )
}