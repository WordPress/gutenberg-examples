(function ($) {
	function setActiveTab($el) {
		const tabId = $el.attr('data-tab-id');
		$el.siblings().removeClass(
			'single__tab--active'
		);
		$el.addClass(
			'single__tab--active'
		);
		$el.parent()
			.siblings('.wp-block-gutenberg-examples-example-11-tab-esnext')
			.each(function () {
				const $tab = $(this);
				if ($tab.attr('data-tab-id') === tabId) {
					$tab.css('display', 'block');
				} else {
					$tab.css('display', 'none');
				}
			});
	}

	$('.single__tab').click(
		function () {
			const $el = $(this);
			setActiveTab($el);
		}
	);

	$('.wp-block-gutenberg-examples-example-11-tab-esnext').each(
		function () {
			const $firstTab = $(this)
				.children()
				.first();
			if ($firstTab) {
				setActiveTab($firstTab);
			}
		}
	);
	$('.wp-block-gutenberg-examples-example-11-tab-esnext').first().css('display', 'block');
})(jQuery); // eslint-disable-line no-undef

