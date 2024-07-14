import Snowboard from '../../../../../modules/system/assets/js/snowboard/main/Snowboard';
import ProxyHandler from '../../../../../modules/system/assets/js/snowboard/main/ProxyHandler';
import Request from '../../../../../modules/system/assets/js/snowboard/ajax/Request';
import AttributeRequest from '../../../../../modules/system/assets/js/snowboard/ajax/handlers/AttributeRequest';
import AssetLoader from '../../../../../modules/system/assets/js/snowboard/extras/AssetLoader';
import DataConfig from '../../../../../modules/system/assets/js/snowboard/extras/DataConfig';
import StylesheetLoader from '../../../../../modules/system/assets/js/snowboard/extras/StylesheetLoader';
import Transition from '../../../../../modules/system/assets/js/snowboard/extras/Transition';
import Flash from '../../../../../modules/system/assets/js/snowboard/extras/Flash';
import FlashListener from '../../../../../modules/system/assets/js/snowboard/extras/FlashListener';
import FormValidation from '../../../../../modules/system/assets/js/snowboard/extras/FormValidation';
import AttachLoading from '../../../../../modules/system/assets/js/snowboard/extras/AttachLoading';
import StripeLoader from '../../../../../modules/system/assets/js/snowboard/extras/StripeLoader';
import Trigger from '../../../../../modules/system/assets/js/snowboard/extras/Trigger';

((window) => {
    const snowboard = new Proxy(
        new Snowboard(),
        ProxyHandler,
    );

    // Cover all aliases
    window.snowboard = snowboard;
    window.Snowboard = snowboard;
    window.SnowBoard = snowboard;

    snowboard.addPlugin('request', Request);
    snowboard.addPlugin('attributeRequest', AttributeRequest);
    snowboard.addPlugin('assetLoader', AssetLoader);
    snowboard.addPlugin('dataConfig', DataConfig);
    snowboard.addPlugin('extrasStyles', StylesheetLoader);
    snowboard.addPlugin('transition', Transition);
    snowboard.addPlugin('flash', Flash);
    snowboard.addPlugin('flashListener', FlashListener);
    snowboard.addPlugin('formValidation', FormValidation);
    snowboard.addPlugin('attachLoading', AttachLoading);
    snowboard.addPlugin('stripeLoader', StripeLoader);
    snowboard.addPlugin('trigger', Trigger);

    snowboard.on('ready', () => {
        // Scan for triggers
        Array
            .from(document.querySelectorAll('*'))
            .filter((element) => [...element.attributes].filter(
                ({ name }) => name.startsWith("data-trigger-")).length > 0
            ).forEach((element) => {
                snowboard.trigger(element);
            });
    });
})(window);
