import FooterLink from "./footer_link";

export default function Footer(props) {
    return (
        <footer className="flex flex-row items-start justify-between bg-gray-100 w-full p-4 mt-10">
            <ul className="flex flex-wrap max-w-3xl">
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
            <div className="flex flex-wrap text-limegreen-600">
                <a href="#"><i className="mb-3 mr-3 fab fa-linkedin-in fa-lg"></i></a>
                <a href="#"><i className="mb-3 mr-3 fab fa-facebook-f fa-lg"></i></a>
                <a href="#"><i className="mb-3 mr-3 fab fa-twitter fa-lg"></i></a>
                <a href="#"><i className="mb-3 mr-3 fab fa-github fa-lg"></i></a>
                <a href="#"><i className="mb-3 mr-3 fab fa-youtube fa-lg"></i></a>
                <a href="#"><i className="mb-3 mr-3 fa fa-podcast fa-lg"></i></a>
                <a href="#"><i className="mb-3 mr-3 fa fa-rss fa-lg"></i></a>
            </div>
        </footer>
    )
}