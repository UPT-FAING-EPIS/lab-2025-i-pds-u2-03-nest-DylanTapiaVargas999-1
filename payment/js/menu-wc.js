'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">payment documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' :
                                            'id="xs-controllers-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' :
                                        'id="xs-injectables-links-module-AppModule-215f693b609e79bc94c3e9aca4d4fa338aedbd5791bfe1d4273eba93cbffa14f972d99a8834e7efbad34a39d29131f467a33d127aaddcaa843ca0deee843bd0f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DomainModule.html" data-type="entity-link" >DomainModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DomainModule-44105860a88e5e7da83eda2860ae453249cac35cc62ab070b7234e26b2e6f26cc285e3ff28ea7e4947f59be309625903c4fb6fa06389aebae2dcef4db156642a"' : 'data-bs-target="#xs-injectables-links-module-DomainModule-44105860a88e5e7da83eda2860ae453249cac35cc62ab070b7234e26b2e6f26cc285e3ff28ea7e4947f59be309625903c4fb6fa06389aebae2dcef4db156642a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DomainModule-44105860a88e5e7da83eda2860ae453249cac35cc62ab070b7234e26b2e6f26cc285e3ff28ea7e4947f59be309625903c4fb6fa06389aebae2dcef4db156642a"' :
                                        'id="xs-injectables-links-module-DomainModule-44105860a88e5e7da83eda2860ae453249cac35cc62ab070b7234e26b2e6f26cc285e3ff28ea7e4947f59be309625903c4fb6fa06389aebae2dcef4db156642a"' }>
                                        <li class="link">
                                            <a href="injectables/DomainService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DomainService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CashPaymentStrategy.html" data-type="entity-link" >CashPaymentStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreditCardPaymentStrategy.html" data-type="entity-link" >CreditCardPaymentStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/DebitCardPaymentStrategy.html" data-type="entity-link" >DebitCardPaymentStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentContext.html" data-type="entity-link" >PaymentContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentService.html" data-type="entity-link" >PaymentService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IPaymentStrategy.html" data-type="entity-link" >IPaymentStrategy</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});