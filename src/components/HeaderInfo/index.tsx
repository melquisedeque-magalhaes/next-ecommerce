// Icons
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { BiUser, BiHeart } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'

// Styles
import { Container, Content, ContentInfos } from "./styles";

export function HeaderInfo() {
    return(
        <Container>
            <Content>
                <ContentInfos>
                    <button>
                        <HiOutlineMail size={20} color='#fff' />
                        <span>melqui.sodre15@gmail.com</span>
                    </button>
                    <button>
                        <FiPhoneCall size={20} color='#fff' />
                        <span>(61) 99119-3044</span>
                    </button>
                </ContentInfos>

                <ContentInfos>
                    <button>
                        <span>Portugues</span>
                        <RiArrowDownSLine size={20} color='#fff' />
                    </button>
                    <button>
                        <span>USD</span>
                        <RiArrowDownSLine size={20} color='#fff' />
                    </button>
                    <button>
                        <span>Login</span>
                        <BiUser size={20} color='#fff' />
                    </button>
                    <button>
                        <span>Minha Lista</span>
                        <BiHeart size={20} color='#fff' />
                    </button>

                    <button>
                        <BsCart2 size={20} color='#fff' />
                    </button>
                </ContentInfos>
            </Content>
        </Container>
    )
}