import {
	RaziloBindCore,
	RaziloBindCoreDetector
} from 'razilobind-core'

import {
	RaziloBindTrimAlterer,
	RaziloBindJsonAlterer,
	RaziloBindNotAlterer,
	RaziloBindPrefixAlterer,
	RaziloBindSuffixAlterer,
	RaziloBindDateAlterer,
	RaziloBindJoinAlterer,
	RaziloBindEqualAlterer,
	RaziloBindIdenticalAlterer
} from 'razilobind-alterer'

import {
	RaziloBindForBinder,
	RaziloBindTextBinder,
	RaziloBindHtmlBinder,
	RaziloBindShowBinder,
	RaziloBindHideBinder,
	RaziloBindStyleBinder,
	RaziloBindClassBinder,
	RaziloBindAttributesBinder,
	RaziloBindSrcBinder,
	RaziloBindHrefBinder,
	RaziloBindDisabledBinder,
	RaziloBindRequiredBinder,
	RaziloBindSelectedBinder,
	RaziloBindIfBinder,
	RaziloBindElseBinder,
	RaziloBindValueBinder,
	RaziloBindCheckedBinder,
	RaziloBindEventBinder,
	RaziloBindClickBinder,
	RaziloBindInputBinder,
	RaziloBindHoverBinder,
	RaziloBindChangeBinder,
	RaziloBindInitBinder,
	RaziloBindModelBinder
} from 'razilobind-binder'

import {
	RaziloBindBooleanResolver,
	RaziloBindPropertyResolver,
	RaziloBindMethodResolver,
	RaziloBindStringResolver,
	RaziloBindNumberResolver,
	RaziloBindObjectResolver,
	RaziloBindArrayResolver,
	RaziloBindPhantomResolver
} from 'razilobind-resolver'

/**
 * RaziloBind Binding Library
 * Packages up the module with extension support if running as complete standalone binder to allow direct injected alterers, binders and resolvers
 * Offers View-Model binding between js object and html view
 */
export default class RaziloBind extends RaziloBindCore {
    constructor(options) {
		super(options);

		// Inject default alterers
		RaziloBindCoreDetector.defaultAlterers = {
			TrimAlterer: RaziloBindTrimAlterer,
			JsonAlterer: RaziloBindJsonAlterer,
			NotAlterer: RaziloBindNotAlterer,
			PrefixAlterer: RaziloBindPrefixAlterer,
			SuffixAlterer: RaziloBindSuffixAlterer,
			DateAlterer: RaziloBindDateAlterer,
			JoinAlterer: RaziloBindJoinAlterer,
			EqualAlterer: RaziloBindEqualAlterer,
			IdenticalAlterer: RaziloBindIdenticalAlterer
		};

		// Inject default binders
		RaziloBindCoreDetector.defaultBinders = {
			ForBinder: RaziloBindForBinder,
			TextBinder: RaziloBindTextBinder,
			HtmlBinder: RaziloBindHtmlBinder,
			ShowBinder: RaziloBindShowBinder,
			HideBinder: RaziloBindHideBinder,
			StyleBinder: RaziloBindStyleBinder,
			ClassBinder: RaziloBindClassBinder,
			AttributesBinder: RaziloBindAttributesBinder,
			SrcBinder: RaziloBindSrcBinder,
			HrefBinder: RaziloBindHrefBinder,
			DisabledBinder: RaziloBindDisabledBinder,
			RequiredBinder: RaziloBindRequiredBinder,
			SelectedBinder: RaziloBindSelectedBinder,
			IfBinder: RaziloBindIfBinder,
			ElseBinder: RaziloBindElseBinder,
			ValueBinder: RaziloBindValueBinder,
			CheckedBinder: RaziloBindCheckedBinder,
			EventBinder: RaziloBindEventBinder,
			ClickBinder: RaziloBindClickBinder,
			InputBinder: RaziloBindInputBinder,
			HoverBinder: RaziloBindHoverBinder,
			ChangeBinder: RaziloBindChangeBinder,
			InitBinder: RaziloBindInitBinder,
			ModelBinder: RaziloBindModelBinder
		};

		// Inject default resolvers
		RaziloBindCoreDetector.defaultResolvers = {
			BooleanResolver: RaziloBindBooleanResolver,
			PropertyResolver: RaziloBindPropertyResolver,
			MethodResolver: RaziloBindMethodResolver,
			StringResolver: RaziloBindStringResolver,
			NumberResolver: RaziloBindNumberResolver,
			ObjectResolver: RaziloBindObjectResolver,
			ArrayResolver: RaziloBindArrayResolver,
			PhantomResolver: RaziloBindPhantomResolver
		};
	}

	/**
	 * addAlterers()
	 * Add custom alterers
	 *
	 * @param array alterers An array of custom alterers to inject into Detector
	 */
	addAlterers(alterers) {
		if (!alterers || typeof alterers !== 'object') return;
		RaziloBindCoreDetector.customAlterers = alterers;
	}

	/**
	 * addBinder()
	 * Add custom binders
	 *
	 * @param array binders An array of custom binders to inject into Detector
	 */
	addBinders(binders) {
		if (!binders || typeof binders !== 'object') return;
		RaziloBindCoreDetector.customBinders = binders;
	}

	/**
	 * addResolvers()
	 * Add custom resolvers
	 *
	 * @param array resolvers An array of custom resolvers to inject into Detector
	 */
	addResolvers(resolvers) {
		if (!resolvers || typeof resolvers !== 'object') return;
		RaziloBindCoreDetector.customResolvers = resolvers;
	}
}
