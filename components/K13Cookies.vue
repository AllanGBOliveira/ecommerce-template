<template>
    <div>
        <button id="lgpd-btn" onclick="lgpdToggle()" class="lgpd-mini">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410.95 410.29">
                <title>cookies</title>
                <g id="camada_de_fora" data-name="camada de fora">
                    <path
                        class="cls-1"
                        d="M298.44,215.89"
                        transform="translate(-91.88 -215.6)"
                    />
                </g>
                <g id="bolinhas">
                    <path
                        class="cls-2"
                        d="M502.6,410.72a73.67,73.67,0,0,1-8.4,4,74.83,74.83,0,0,1-21.76,5.14c-19.4,1.37-34.74-7-37.39-8.51a68.09,68.09,0,0,1-27.89-30.06c-1.74.54-4.2,1.26-7.18,2a97.27,97.27,0,0,1-16.09,2.63,57.24,57.24,0,0,1-22.42-3.69c-5.62-1.94-22.26-7.94-34.28-25.05-16.06-22.86-11.4-47.79-10.55-52a68.71,68.71,0,0,1,14.77-30.33v-1.58a49.33,49.33,0,0,1-4.36-2.38c-23.78-14.52-27.9-44.43-28.08-45.89a61.59,61.59,0,0,1-.46-8.17l-.07-1a181,181,0,0,0-39.3,2c-49.56,8.08-82.07,34.85-93.89,44.84a205.52,205.52,0,0,0-59.34,232.09c28.87,73.75,91.58,105.63,101.54,110.5C217,610.05,293,645.64,377,610.64c53.2-22.16,81.73-61,91.78-76.22C503.66,481.59,503.46,428.71,502.6,410.72ZM448.51,499c-23.63,45.22-60.26,66.39-68.25,70.81a171.38,171.38,0,0,1-202.55-27.89,169.38,169.38,0,0,1-41.34-65.86,173.76,173.76,0,0,1,12.07-137.48,175.06,175.06,0,0,1,40-47.87c32.22-27.09,64.58-34.62,70.81-36,4.51-1,8.3-1.6,10.88-2a66,66,0,0,0,13.25,24.33c1.18,1.34,2.37,2.6,3.56,3.75l-.46,1.59a103.85,103.85,0,0,0,13.85,97.05,97.83,97.83,0,0,0,35.86,31.12C356.59,420.77,376,421,385.34,420.94c2.78,0,5.1-.1,6.73-.19a98.86,98.86,0,0,0,68.11,34.35c1.71.12,3.15.17,4.15.2A174.52,174.52,0,0,1,448.51,499Z"
                        transform="translate(-91.88 -215.6)"
                    />
                    <circle class="cls-2" cx="128.89" cy="128.01" r="26.77" />
                    <circle class="cls-2" cx="94.6" cy="213.46" r="26.77" />
                    <circle class="cls-2" cx="197.46" cy="230.57" r="26.77" />
                    <circle class="cls-2" cx="179.15" cy="316.02" r="26.77" />
                    <circle class="cls-2" cx="282.01" cy="281.73" r="26.77" />
                </g>
            </svg>
        </button>
        <div tabindex="0" id="lgpd-msg" class="msg-lgpd show">
            <div class="lgpd-container">
                <div class="msg">
                    Nós usamos cookies para melhorar a sua experiência em nossos
                    serviços, personalizar publicidade e recomendar conteúdo de
                    seu interesse. Ao utilizar nossos serviços, você concorda
                    com tal monitoramento descrito em nossa
                    <a tabindex="1" href="#" target="_blank">
                        Política de Privacidade
                    </a>
                </div>
                <div class="footer-buttons">
                    <button tabindex="2" onclick="lgpdClose()">
                        Permitir Tudo
                    </button>
                    <button tabindex="3" onclick="lgpdClose()">
                        Permitir Essenciais
                    </button>
                    <button
                        tabindex="4"
                        onclick="lgpdToggle(true)"
                        class="manage-cookies"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 410.95 410.29"
                        >
                            <title>cookies</title>
                            <g id="camada_de_fora" data-name="camada de fora">
                                <path
                                    class="cls-1"
                                    d="M298.44,215.89"
                                    transform="translate(-91.88 -215.6)"
                                />
                            </g>
                            <g id="bolinhas">
                                <path
                                    class="cls-2"
                                    d="M502.6,410.72a73.67,73.67,0,0,1-8.4,4,74.83,74.83,0,0,1-21.76,5.14c-19.4,1.37-34.74-7-37.39-8.51a68.09,68.09,0,0,1-27.89-30.06c-1.74.54-4.2,1.26-7.18,2a97.27,97.27,0,0,1-16.09,2.63,57.24,57.24,0,0,1-22.42-3.69c-5.62-1.94-22.26-7.94-34.28-25.05-16.06-22.86-11.4-47.79-10.55-52a68.71,68.71,0,0,1,14.77-30.33v-1.58a49.33,49.33,0,0,1-4.36-2.38c-23.78-14.52-27.9-44.43-28.08-45.89a61.59,61.59,0,0,1-.46-8.17l-.07-1a181,181,0,0,0-39.3,2c-49.56,8.08-82.07,34.85-93.89,44.84a205.52,205.52,0,0,0-59.34,232.09c28.87,73.75,91.58,105.63,101.54,110.5C217,610.05,293,645.64,377,610.64c53.2-22.16,81.73-61,91.78-76.22C503.66,481.59,503.46,428.71,502.6,410.72ZM448.51,499c-23.63,45.22-60.26,66.39-68.25,70.81a171.38,171.38,0,0,1-202.55-27.89,169.38,169.38,0,0,1-41.34-65.86,173.76,173.76,0,0,1,12.07-137.48,175.06,175.06,0,0,1,40-47.87c32.22-27.09,64.58-34.62,70.81-36,4.51-1,8.3-1.6,10.88-2a66,66,0,0,0,13.25,24.33c1.18,1.34,2.37,2.6,3.56,3.75l-.46,1.59a103.85,103.85,0,0,0,13.85,97.05,97.83,97.83,0,0,0,35.86,31.12C356.59,420.77,376,421,385.34,420.94c2.78,0,5.1-.1,6.73-.19a98.86,98.86,0,0,0,68.11,34.35c1.71.12,3.15.17,4.15.2A174.52,174.52,0,0,1,448.51,499Z"
                                    transform="translate(-91.88 -215.6)"
                                />
                                <circle
                                    class="cls-2"
                                    cx="128.89"
                                    cy="128.01"
                                    r="26.77"
                                />
                                <circle
                                    class="cls-2"
                                    cx="94.6"
                                    cy="213.46"
                                    r="26.77"
                                />
                                <circle
                                    class="cls-2"
                                    cx="197.46"
                                    cy="230.57"
                                    r="26.77"
                                />
                                <circle
                                    class="cls-2"
                                    cx="179.15"
                                    cy="316.02"
                                    r="26.77"
                                />
                                <circle
                                    class="cls-2"
                                    cx="282.01"
                                    cy="281.73"
                                    r="26.77"
                                />
                            </g>
                        </svg>
                        Gerenciar seus cookies
                    </button>
                </div>
            </div>
        </div>

        <div id="lgpd-modal" class="k13-lgpd">
            <div class="k13-lgpd-content">
                <div class="k13-lgpd-header">
                    <button
                        tabindex="5"
                        type="button"
                        role="button"
                        class="lgpd-tab active"
                        data-toggle="management"
                    >
                        gerenciar cookies
                    </button>
                    <button
                        tabindex="6"
                        type="button"
                        role="button"
                        class="lgpd-tab"
                        data-toggle="rights"
                    >
                        meus direitos
                    </button>
                    <a tabindex="7" href="#" target="_blank" class="lgpd-tab"
                        >política de privacidade</a
                    >
                </div>
                <div id="modal-cookie" class="k13-lgpd-body">
                    <form action="" id="management" class="k13-lgpd-main show">
                        <h2>Gerenciar seus Cookies</h2>
                        <div class="k13-lgpd-abstract">
                            Suas Preferências de Cookies There are many
                            variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't
                            lo even slightly believable. If you are going to use
                            a passage of Lorem Ipsum, you need to be sure there
                            isn't anything embarrassing hidden in the middle of
                            text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary,
                            making this the first true generator on the
                            Internet. It uses a dictionary of over 200 Latin
                            words, combined with a handful of model sentence
                            structures, to generate Lorem Ipsum which looks
                            reasonable. The generated Lorem Ipsum is therefore
                            always free from repetition, injected humour, or
                            non-characteristic words etc. Lorem Ipsum available,
                            but the majority have suffered alteration in some
                            form, by injected humour, or randomised words which
                            don't look even slightly believable. If you are
                            going t use a passage of Lorem Ipsum, you need to be
                            sure there isn't anything embarrassing hidden in the
                            middle of text.
                        </div>
                        <div class="k13-lgpd-info">
                            <div class="btn-tabs">
                                <button
                                    tabindex="8"
                                    type="button"
                                    role="button"
                                    class="lgpd-tab sub active check"
                                    data-toggle="essential"
                                >
                                    <svg
                                        id="Camada_2"
                                        data-name="Camada 2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 417.85 312.15"
                                    >
                                        <title>check</title>
                                        <path
                                            class="cls-1"
                                            d="M224.59,564.09a43.32,43.32,0,0,0,9.5,8.7c2.57,1.73,4.6,3.19,7.32,4,6.86,1.93,13.45-1.62,16.22-3.37L403.41,428l91.78-91.78s3.82-4.05,6.63-7.27a26.45,26.45,0,0,0,2.86-3.61c3.76-8,2.51-16.22.2-19.19l-39.17-38.77a15.58,15.58,0,0,0-3.56-1.58c-10.49-3.14-21,6.14-22.74,7.72L318.15,394.77l-72.39,72.79-85.85-85.65-8.7-9.1a20.73,20.73,0,0,0-5.34-2.37c-8-2.23-15,1.15-17.21,2.37L94,406.64a19.57,19.57,0,0,0-2.77,4.15c-3.45,7-1.68,14.14-.84,16.84a.75.75,0,0,0,.18.3Z"
                                            transform="translate(-89.22 -265.16)"
                                        />
                                    </svg>
                                    Essencial
                                </button>
                                <button
                                    tabindex="9"
                                    type="button"
                                    role="button"
                                    class="lgpd-tab sub"
                                    data-toggle="statistic"
                                >
                                    <svg
                                        id="Camada_2"
                                        data-name="Camada 2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 417.85 312.15"
                                    >
                                        <title>check</title>
                                        <path
                                            class="cls-1"
                                            d="M224.59,564.09a43.32,43.32,0,0,0,9.5,8.7c2.57,1.73,4.6,3.19,7.32,4,6.86,1.93,13.45-1.62,16.22-3.37L403.41,428l91.78-91.78s3.82-4.05,6.63-7.27a26.45,26.45,0,0,0,2.86-3.61c3.76-8,2.51-16.22.2-19.19l-39.17-38.77a15.58,15.58,0,0,0-3.56-1.58c-10.49-3.14-21,6.14-22.74,7.72L318.15,394.77l-72.39,72.79-85.85-85.65-8.7-9.1a20.73,20.73,0,0,0-5.34-2.37c-8-2.23-15,1.15-17.21,2.37L94,406.64a19.57,19.57,0,0,0-2.77,4.15c-3.45,7-1.68,14.14-.84,16.84a.75.75,0,0,0,.18.3Z"
                                            transform="translate(-89.22 -265.16)"
                                        />
                                    </svg>
                                    Estatística
                                </button>
                                <button
                                    tabindex="10"
                                    type="button"
                                    role="button"
                                    class="lgpd-tab sub"
                                    data-toggle="performance"
                                >
                                    <svg
                                        id="Camada_2"
                                        data-name="Camada 2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 417.85 312.15"
                                    >
                                        <title>check</title>
                                        <path
                                            class="cls-1"
                                            d="M224.59,564.09a43.32,43.32,0,0,0,9.5,8.7c2.57,1.73,4.6,3.19,7.32,4,6.86,1.93,13.45-1.62,16.22-3.37L403.41,428l91.78-91.78s3.82-4.05,6.63-7.27a26.45,26.45,0,0,0,2.86-3.61c3.76-8,2.51-16.22.2-19.19l-39.17-38.77a15.58,15.58,0,0,0-3.56-1.58c-10.49-3.14-21,6.14-22.74,7.72L318.15,394.77l-72.39,72.79-85.85-85.65-8.7-9.1a20.73,20.73,0,0,0-5.34-2.37c-8-2.23-15,1.15-17.21,2.37L94,406.64a19.57,19.57,0,0,0-2.77,4.15c-3.45,7-1.68,14.14-.84,16.84a.75.75,0,0,0,.18.3Z"
                                            transform="translate(-89.22 -265.16)"
                                        />
                                    </svg>
                                    Desempenho
                                </button>
                            </div>
                            <div id="essential" class="k13-lgpd-main sub show">
                                <div class="k13-lgpd-info-header">
                                    <h3>Essencial</h3>

                                    <div>
                                        <span class="disabled-msg"
                                            >Sempre Ativo</span
                                        >
                                        <label class="switch disabled">
                                            <input
                                                type="checkbox"
                                                name="essential"
                                                checked
                                            />
                                            <span class="slider">
                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 417.85 312.15"
                                                >
                                                    <title>check</title>
                                                    <path
                                                        class="cls-1"
                                                        d="M224.59,564.09a43.32,43.32,0,0,0,9.5,8.7c2.57,1.73,4.6,3.19,7.32,4,6.86,1.93,13.45-1.62,16.22-3.37L403.41,428l91.78-91.78s3.82-4.05,6.63-7.27a26.45,26.45,0,0,0,2.86-3.61c3.76-8,2.51-16.22.2-19.19l-39.17-38.77a15.58,15.58,0,0,0-3.56-1.58c-10.49-3.14-21,6.14-22.74,7.72L318.15,394.77l-72.39,72.79-85.85-85.65-8.7-9.1a20.73,20.73,0,0,0-5.34-2.37c-8-2.23-15,1.15-17.21,2.37L94,406.64a19.57,19.57,0,0,0-2.77,4.15c-3.45,7-1.68,14.14-.84,16.84a.75.75,0,0,0,.18.3Z"
                                                        transform="translate(-89.22 -265.16)"
                                                    />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="lgpd-sub-content">
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have sufed aration isome form, by
                                        injected hum randomised words ven sligh
                                        believable. If you are going to use a
                                        passage. Are many variations of passages
                                        of Lorem Ipsum available, but the
                                        majority have sufed aration isome form,
                                        by injected hum randomised words ven
                                        sligh believable. If you are going to
                                        use a passage.
                                    </p>
                                </div>

                                <div class="lgpd-collapse">
                                    <button
                                        tabindex="11"
                                        type="button"
                                        role="button"
                                        id="essential-first"
                                        class="lgpd-collapse-toggle"
                                    >
                                        Provedores cookie da primeira parte

                                        <svg
                                            id="Camada_2"
                                            data-name="Camada 2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 480.94 283.31"
                                        >
                                            <path
                                                d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                transform="translate(-434.32 -242.35)"
                                            />
                                        </svg>
                                    </button>

                                    <div class="lgpd-collapse-content">
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="essential-cookie-01"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                dci_ jwt

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="essential-cookie-02"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                akavpau_maintenance_vp

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="essential-cookie-03"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                s_depth

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="lgpd-collapse">
                                    <button
                                        tabindex="12"
                                        type="button"
                                        role="button"
                                        id="essential-third"
                                        class="lgpd-collapse-toggle"
                                    >
                                        Provedores cookie terceiros

                                        <svg
                                            id="Camada_2"
                                            data-name="Camada 2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 480.94 283.31"
                                        >
                                            <path
                                                d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                transform="translate(-434.32 -242.35)"
                                            />
                                        </svg>
                                    </button>
                                    <div class="lgpd-collapse-content">
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="essential-cookie-04"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                dci_ jwt

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="essential-cookie-05"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                akavpau_maintenance_vp

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="essential-cookie-06"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                s_depth

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="statistic" class="k13-lgpd-main sub">
                                <div class="k13-lgpd-info-header">
                                    <h3>Estatística</h3>

                                    <div>
                                        <label class="switch">
                                            <input
                                                type="checkbox"
                                                name="statistic"
                                            />
                                            <span class="slider">
                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 417.85 312.15"
                                                >
                                                    <title>check</title>
                                                    <path
                                                        class="cls-1"
                                                        d="M224.59,564.09a43.32,43.32,0,0,0,9.5,8.7c2.57,1.73,4.6,3.19,7.32,4,6.86,1.93,13.45-1.62,16.22-3.37L403.41,428l91.78-91.78s3.82-4.05,6.63-7.27a26.45,26.45,0,0,0,2.86-3.61c3.76-8,2.51-16.22.2-19.19l-39.17-38.77a15.58,15.58,0,0,0-3.56-1.58c-10.49-3.14-21,6.14-22.74,7.72L318.15,394.77l-72.39,72.79-85.85-85.65-8.7-9.1a20.73,20.73,0,0,0-5.34-2.37c-8-2.23-15,1.15-17.21,2.37L94,406.64a19.57,19.57,0,0,0-2.77,4.15c-3.45,7-1.68,14.14-.84,16.84a.75.75,0,0,0,.18.3Z"
                                                        transform="translate(-89.22 -265.16)"
                                                    />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div class="warning-msg show">
                                    Não poderemos realizar análises para
                                    otimizar a funcionalidade e o desempenho do
                                    site, nem lembrar o que está em seu carrinho
                                    de compras.
                                </div>
                                <div class="lgpd-sub-content">
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have sufed aration isome form, by
                                        injected hum randomised words ven sligh
                                        believable. If you are going to use a
                                        passage. Are many variations of passages
                                        of Lorem Ipsum available, but the
                                        majority have sufed aration isome form,
                                        by injected hum randomised words ven
                                        sligh believable. If you are going to
                                        use a passage.
                                    </p>
                                </div>

                                <div class="lgpd-collapse">
                                    <button
                                        type="button"
                                        role="button"
                                        id="statistic-first"
                                        class="lgpd-collapse-toggle"
                                    >
                                        Provedores cookie da primeira parte

                                        <svg
                                            id="Camada_2"
                                            data-name="Camada 2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 480.94 283.31"
                                        >
                                            <path
                                                d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                transform="translate(-434.32 -242.35)"
                                            />
                                        </svg>
                                    </button>

                                    <div class="lgpd-collapse-content">
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="statistic-cookie-01"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                dci_ jwt

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="statistic-cookie-02"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                akavpau_maintenance_vp

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="statistic-cookie-03"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                s_depth

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="lgpd-collapse">
                                    <button
                                        type="button"
                                        role="button"
                                        id="statistic-third"
                                        class="lgpd-collapse-toggle"
                                    >
                                        Provedores cookie terceiros

                                        <svg
                                            id="Camada_2"
                                            data-name="Camada 2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 480.94 283.31"
                                        >
                                            <path
                                                d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                transform="translate(-434.32 -242.35)"
                                            />
                                        </svg>
                                    </button>

                                    <div class="lgpd-collapse-content">
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="statistic-cookie-04"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                dci_ jwt

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="statistic-cookie-05"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                akavpau_maintenance_vp

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="statistic-cookie-06"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                s_depth

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="performance" class="k13-lgpd-main sub">
                                <div class="k13-lgpd-info-header">
                                    <h3>Desempenho</h3>

                                    <div>
                                        <label class="switch">
                                            <input
                                                type="checkbox"
                                                name="performance"
                                            />
                                            <span class="slider">
                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 417.85 312.15"
                                                >
                                                    <title>check</title>
                                                    <path
                                                        class="cls-1"
                                                        d="M224.59,564.09a43.32,43.32,0,0,0,9.5,8.7c2.57,1.73,4.6,3.19,7.32,4,6.86,1.93,13.45-1.62,16.22-3.37L403.41,428l91.78-91.78s3.82-4.05,6.63-7.27a26.45,26.45,0,0,0,2.86-3.61c3.76-8,2.51-16.22.2-19.19l-39.17-38.77a15.58,15.58,0,0,0-3.56-1.58c-10.49-3.14-21,6.14-22.74,7.72L318.15,394.77l-72.39,72.79-85.85-85.65-8.7-9.1a20.73,20.73,0,0,0-5.34-2.37c-8-2.23-15,1.15-17.21,2.37L94,406.64a19.57,19.57,0,0,0-2.77,4.15c-3.45,7-1.68,14.14-.84,16.84a.75.75,0,0,0,.18.3Z"
                                                        transform="translate(-89.22 -265.16)"
                                                    />
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="warning-msg show">
                                    Não poderemos realizar análises para
                                    otimizar a funcionalidade e o desempenho do
                                    site, nem lembrar o que está em seu carrinho
                                    de compras.
                                </div>
                                <div class="lgpd-sub-content">
                                    <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have sufed aration isome form, by
                                        injected hum randomised words ven sligh
                                        believable. If you are going to use a
                                        passage. Are many variations of passages
                                        of Lorem Ipsum available, but the
                                        majority have sufed aration isome form,
                                        by injected hum randomised words ven
                                        sligh believable. If you are going to
                                        use a passage.
                                    </p>
                                </div>

                                <div class="lgpd-collapse">
                                    <button
                                        type="button"
                                        role="button"
                                        id="performance-first"
                                        class="lgpd-collapse-toggle"
                                    >
                                        Provedores cookie da primeira parte

                                        <svg
                                            id="Camada_2"
                                            data-name="Camada 2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 480.94 283.31"
                                        >
                                            <path
                                                d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                transform="translate(-434.32 -242.35)"
                                            />
                                        </svg>
                                    </button>

                                    <div class="lgpd-collapse-content">
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="performance-cookie-01"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                dci_ jwt

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="performance-cookie-02"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                akavpau_maintenance_vp

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="performance-cookie-03"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                s_depth

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="lgpd-collapse">
                                    <button
                                        type="button"
                                        role="button"
                                        id="performance-third"
                                        class="lgpd-collapse-toggle"
                                    >
                                        Provedores cookie terceiros

                                        <svg
                                            id="Camada_2"
                                            data-name="Camada 2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 480.94 283.31"
                                        >
                                            <path
                                                d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                transform="translate(-434.32 -242.35)"
                                            />
                                        </svg>
                                    </button>
                                    <div class="lgpd-collapse-content">
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="performance-cookie-04"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                dci_ jwt

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="performance-cookie-05"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                akavpau_maintenance_vp

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="lgpd-collapse sub">
                                            <button
                                                type="button"
                                                role="button"
                                                id="performance-cookie-06"
                                                class="lgpd-collapse-toggle sub"
                                            >
                                                s_depth

                                                <svg
                                                    id="Camada_2"
                                                    data-name="Camada 2"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 480.94 283.31"
                                                >
                                                    <path
                                                        d="M439.12,299.31a25.17,25.17,0,0,1-4.19-9.19,26.73,26.73,0,0,1,2.74-18.37l24.82-25.15a19.69,19.69,0,0,1,3.22-2.09c9.47-4.86,20.34-.22,23.53,1.29l186,184.55L852.38,253.53a25.74,25.74,0,0,1,5.28-5.27,26.19,26.19,0,0,1,12.13-4.92,26.66,26.66,0,0,1,15,2.42L914,276a25.07,25.07,0,0,1,.72,2.78c1.73,8.56-1.33,16.18-3.74,20.67L699.34,512.31a33.92,33.92,0,0,1-6.53,6.52c-2.83,2.15-9.76,7.39-19.34,6.77s-15.93-6.87-17.53-8.58Z"
                                                        transform="translate(-434.32 -242.35)"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                class="
                                                    lgpd-collapse-content
                                                    sub
                                                "
                                            >
                                                <table>
                                                    <tr>
                                                        <th>Tipo</th>
                                                        <td>Cookie</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Cookie Domain</th>

                                                        <td>k13.com.br</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Expiração</th>
                                                        <td>Sessão</td>
                                                    </tr>
                                                    <tr>
                                                        <th>País</th>
                                                        <td>BR</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div id="rights" class="k13-lgpd-main">
                        <h2>Meus Direitos</h2>
                        <div class="k13-lgpd-abstract">
                            Os direitos relacionados a sua privacidade e a
                            proteção de dados pessoais de acordo com a Lei Geral
                            de Proteção de Dados (LGPD) poderão ser exercidos
                            por meio do formulário abaixo. Nós precisamos de
                            algumas informações para processar a sua solicitação
                            de maneira apropriada, pedimos que preencha
                            atentamente os campos do formulário. Selecione a
                            seguir o direito que deseja:
                        </div>

                        <p class="k13-required-msg">Campos obrigatórios *</p>

                        <form action="" class="k13-form-layout">
                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input type="checkbox" name="" />
                                    <span class="checkmark"></span>
                                    <span class="k13-text"
                                        >Confirmação de tratamento</span
                                    >
                                </label>
                            </div>
                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input type="checkbox" name="" />
                                    <span class="checkmark"></span>
                                    <span class="k13-text">Acesso</span>
                                </label>
                            </div>
                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input
                                        type="checkbox"
                                        name=""
                                        checked="checked"
                                    />
                                    <span class="checkmark"></span>
                                    <span class="k13-text">Portabilidade</span>
                                </label>
                            </div>
                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input type="checkbox" name="" />
                                    <span class="checkmark"></span>
                                    <span class="k13-text">Retificação</span>
                                </label>
                            </div>
                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input type="checkbox" name="" />
                                    <span class="checkmark"></span>
                                    <span class="k13-text"
                                        >Revisão de Decisões Automatizadas</span
                                    >
                                </label>
                            </div>
                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input type="checkbox" name="" />
                                    <span class="checkmark"></span>
                                    <span class="k13-text"
                                        >Opor a tratamento de dados</span
                                    >
                                </label>
                            </div>
                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input type="checkbox" name="" />
                                    <span class="checkmark"></span>
                                    <span class="k13-text"
                                        >Eliminação/Anonimização</span
                                    >
                                </label>
                            </div>

                            <div class="k13-form-group">
                                <label class="k13-label" for="request-detail"
                                    >Detalhe a sua solicitação: *</label
                                >
                                <input
                                    type="text"
                                    name="request-detail"
                                    id="request-detail"
                                    required
                                />
                            </div>

                            <div class="k13-form-group small">
                                <label class="k13-label" for="email"
                                    >E-mail *</label
                                >
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div class="k13-form-group small">
                                <label class="k13-label" for="CPF">CPF *</label>
                                <input
                                    type="tel"
                                    name="CPF"
                                    id="CPF"
                                    required
                                />
                            </div>
                            <div class="k13-form-group small">
                                <label class="k13-label" for="first-name"
                                    >Primeiro Nome *</label
                                >
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    required
                                />
                            </div>
                            <div class="k13-form-group small">
                                <label class="k13-label" for="last-name"
                                    >Sobrenome *</label
                                >
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    required
                                />
                            </div>

                            <div class="k13-form-group small">
                                <label class="k13-label" for="birthday"
                                    >Data de Nascimento</label
                                >
                                <input
                                    type="date"
                                    name="birthday"
                                    id="birthday"
                                />
                            </div>

                            <div class="k13-form-group small">
                                <label class="k13-label" for="phone"
                                    >Telefone Celular *</label
                                >
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    class="k13-phone-input"
                                    maxlength="15"
                                    placeholder="(00) 00000-0000"
                                    required
                                />
                            </div>
                            <span class="k13-label"
                                >Se a sua solicitação tiver o objetivo de
                                retificar dados ou se você pretende realizar uma
                                solicitação em nome de terceiros, selecione SIM
                                abaixo *</span
                            >

                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input
                                        type="radio"
                                        name="yeas-or-not"
                                        checked
                                    />
                                    <span class="checkmark"></span>
                                    <span class="k13-text">SIM</span>
                                </label>
                            </div>

                            <div class="k13-form-group checks small">
                                <label class="k13-check-box">
                                    <input type="radio" name="yeas-or-not" />
                                    <span class="checkmark"></span>
                                    <span class="k13-text">NÃO</span>
                                </label>
                            </div>

                            <div class="k13-form-group">
                                <label
                                    class="dropzone"
                                    id="dropzone"
                                    aria-label="Escolha um arquivo"
                                >
                                    <span class="k13-label"
                                        >Anexo de documentos de comprovação
                                        *</span
                                    >
                                    <input
                                        type="file"
                                        class="custom-input dropzone-input"
                                        name="file-1[]"
                                        id="file-1"
                                        multiple
                                    />
                                    <table class="dropzone-table">
                                        <tr>
                                            <th>Nome do arquivo</th>
                                            <th>Tamanho</th>
                                        </tr>
                                    </table>
                                    <div class="text">
                                        <span
                                            >Soltar arquivos a serem anexados ou
                                            navegar</span
                                        >
                                        <span>UPLOAD</span>
                                        <p class="dragging-msg">
                                            Arraste e solte seu(s) arquivo(s)
                                            aqui
                                        </p>
                                    </div>
                                </label>
                            </div>
                            <p class="k13-files-msg">
                                (1) Adicione procuração válida com firma
                                reconhecida e poderes específicos para a
                                solicitação, certidão de nascimento do menor de
                                idade, ordem judicial que declare poderes em
                                relação ao incapaz, ou outro documento que
                                comprove os seus poderes para essa solicitação;
                                ou (2) Adicione documento que comprove a
                                validade do pedido de retificação de dados
                                pessoais.
                            </p>

                            <div class="footer-buttons">
                                <div
                                    class="g-recaptcha"
                                    data-theme="light"
                                    data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                ></div>
                                <button type="submit">ENVIAR</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="k13-lgpd-footer">
                    <button type="submit" onclick="lgpdToggle()">
                        Salvar Alterações
                    </button>
                    <!-- <button><div class="lds-dual-ring"></div></button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "K13Cookies",
};
</script>