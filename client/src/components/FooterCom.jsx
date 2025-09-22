import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {
  Footer,
  FooterTitle,
  FooterLink,
  FooterLinkGroup,
  FooterDivider,
  FooterCopyright,
  FooterIcon,
} from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";


export default function FooterCom() {
  return (
    <Footer
      container
      className="bg-gradient-to-r from-blue-50 to-blue-200 text-gray-800 rounded-none shadow-none"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-10 text-gray-600">
        <div className="grid gap-8 sm:flex sm:justify-between md:grid-cols-3">
          {/* Logo + Name */}
          <div>
            <Link to="/" className="flex items-center gap-0 whitespace-nowrap text-lg">
            <img src={logo} alt="logo" className="w-8 sm:w-7" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
                BlogBuddy
              </span>
            </Link>
            <p className="mt-3 text-sm text-amber-600 max-w-xs">
              Your daily companion for tech insights, blogs, and coding guides.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <FooterTitle title={<span className="text-slate-700 font-semibold">About</span>} />
              <FooterLinkGroup col>
                <FooterLink
                  as={Link}
                  to="/about"
                  className="text-stone-600 hover:text-indigo-700"
                >
                  Our Story
                </FooterLink>
                <FooterLink href="#" className="text-stone-600 hover:text-indigo-700">
                  Contributors
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle  title={<span className="text-blue-900 font-semibold">Follow Us</span>} />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-stone-600 hover:text-indigo-700">
                  GitHub
                </FooterLink>
                <FooterLink href="#" className="text-stone-600 hover:text-indigo-700">
                  Twitter
                </FooterLink>
                <FooterLink href="#" className="text-stone-600 hover:text-indigo-700">
                  LinkedIn
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title={<span className="text-blue-900 font-semibold">Legal</span>} />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-stone-600 hover:text-indigo-700">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" className="text-stone-600 hover:text-indigo-700">
                  Terms & Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className="border-blue-300 my-6" />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="BlogBuddy™"
            year={new Date().getFullYear()}
            className="text-slate-600"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} className="text-purple-600 hover:text-indigo-800" />
            <FooterIcon href="#" icon={BsInstagram} className="text-pink-700 hover:text-indigo-800" />
            <FooterIcon href="#" icon={BsTwitter} className="text-indigo-700 hover:text-indigo-800" />
            <FooterIcon href="#" icon={BsGithub} className="text-slate-600 hover:text-indigo-800" />
            <FooterIcon href="#" icon={BsDribbble} className="text-pink-500 hover:text-indigo-800" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
