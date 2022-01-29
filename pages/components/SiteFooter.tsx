import { FaGithub , FaTwitter } from 'react-icons/fa'
import { HStack, Icon, LinkBox, LinkOverlay } from '@chakra-ui/react'
const GITHUB_URL = 'https://github.com/jrfrantz/function-selector'
const TWITTER_URL = 'https://twitter.com/therealjfrantz'
export default function SiteFooter() {
    return (
        <HStack spacing='8'>
            <LinkBox>
                <LinkOverlay href={GITHUB_URL} isExternal>
                    <Icon as={FaGithub} />
                </LinkOverlay>
            </LinkBox>
            <LinkBox>
            <LinkOverlay href={TWITTER_URL} isExternal>
                <Icon as={FaTwitter} />
            </LinkOverlay>
            </LinkBox>
        </HStack>
    )
}