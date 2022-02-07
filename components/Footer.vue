<template>
    <footer id="footer">
        <div class="menu-footer">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="p-0 col-lg-4 col-xl-3 address">
                        <picture
                            class="
                                col-md-6 col-lg-12
                                text-center text-md-left text-lg-center
                            "
                        >
                            <source
                                media="(max-width: 767px)"
                                srcset="/logo-footer-2x.png"
                            />
                            <img src="/logo-footer.png" class="logo-footer" />
                        </picture>

                        <address class="col-md-6 col-lg-12">
                            <p>CNPJ 99.999.999/9999-9</p>
                            <p>
                                <fa :icon="['fas', 'phone']" /> 42 9 9494 9494 -
                                <fa :icon="['fab', 'whatsapp']" /> 42 3636 3636
                            </p>
                            <p>Atendimento das 8h30-12h - 13h30-18</p>
                            <p>Av. Endereço, 2422 - Guarapuava - PR</p>
                        </address>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-2">
                        <h2 class="tit">Atendimento Ao Cliente</h2>
                        <ul class="links">
                            <li>
                                <nuxt-link to="/page">Quem Somos</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/contact"
                                    >Contato/Localização</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/page"
                                    >Trocas e Devoluções</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/page"
                                    >Prazos de Entrega</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/page"
                                    >Políticas e Privacidade</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/page"
                                    >Formas de Pagamentos</nuxt-link
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg-3 col-xl-2">
                        <h2 class="tit">Formas De Pagamento</h2>
                        <ul class="payment-methods">
                            <li><img src="/imgs/flags/amex.svg" alt="" /></li>
                            <li><img src="/imgs/flags/boleto.svg" alt="" /></li>
                            <li>
                                <img src="/imgs/flags/dinersclub.svg" alt="" />
                            </li>
                            <li><img src="/imgs/flags/elo.svg" alt="" /></li>
                            <li>
                                <img src="/imgs/flags/hipercard.svg" alt="" />
                            </li>
                            <li>
                                <img src="/imgs/flags/mastercard.svg" alt="" />
                            </li>
                            <li><img src="/imgs/flags/visa.svg" alt="" /></li>
                            <li>
                                <img
                                    src="/imgs/flags/visa-checkout.svg"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2">
                        <h2 class="tit">Redes Sociais</h2>
                        <ul class="social">
                            <li>
                                <a
                                    href="https://facebook.com/"
                                    title="Facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Acesse nossa página no Facebook"
                                >
                                    <fa :icon="['fab', 'facebook-square']" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    title="Twitter"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Acesse nosso perfil no Twitter"
                                >
                                    <fa :icon="['fab', 'twitter']" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    title="Instagram"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Acesse nosso perfil no Instagram"
                                >
                                    <fa :icon="['fab', 'instagram']" />
                                </a>
                            </li>
                            <li>
                                <!--
                        <a href="https://api.whatsapp.com/send?phone=5542999999999" title="Whatsapp" target="_blank" rel="noreferrer" aria-label="Envie-nos uma mensagem atráves do WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="k13">
            <div class="container">
                <a
                    href="https://k13.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    title="K13 - Agência Web"
                    ><img src="/imgs/k13.png" alt="K13 - Agência Web"
                /></a>
                <span>- Todos os Direitos Reservados</span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>