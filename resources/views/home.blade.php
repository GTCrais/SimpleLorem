<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ $metaTitle }}</title>
		<meta name="description" content="{{ $metaDescription }}" />
		<meta name="keywords" content="{{ $metaKeywords }}" />

		<meta property="og:title" content="{{ $metaTitle }}" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="{{ request()->url() }}" />
		<meta property="og:image" content="http://{{ request()->server("HTTP_HOST") }}/img/shareImg.png" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:description" content="{{ $metaDescription }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:400" rel="stylesheet">

		<link href="/css/vendor.css?v={{ config('assetversioning.app.cssVendors') }}" rel="stylesheet"/>
		<link href="/css/app.css?v={{ config('assetversioning.app.css') }}" rel="stylesheet"/>

		<link rel="icon" href="/img/favicon.png" type="image/x-icon">
    </head>
    <body>

		<div id="vue-wrapper" class="d-flex justify-content-center">

			<app>
				<div class="transparent">
					<h1>Simple Lorem Ipsum</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt tortor non
						efficitur egestas. Integer maximus dui ut porta efficitur. Nullam consectetur tincidunt
						scelerisque. In facilisis varius ullamcorper. Phasellus nibh odio, vehicula non commodo
						vel, ullamcorper eu quam. Nunc at congue elit, ac gravida velit. Cras eu quam eget augue
						vehicula faucibus ac sed enim.
					</p>

					<p>
						Etiam tristique mauris eu elit rutrum, vitae vehicula nunc gravida. Vestibulum ornare
						metus eget semper vestibulum. Integer auctor arcu eget mi cursus luctus non ac orci. Donec
						eu mi egestas, volutpat dolor ut, cursus arcu.
					</p>

					<p>
						Phasellus tincidunt elementum tristique. Aliquam erat volutpat. Donec at suscipit risus, sit
						amet vehicula ipsum. Sed ac enim fringilla enim lacinia pretium. Phasellus volutpat mauris
						massa, vel auctor magna ullamcorper ac. Pellentesque dignissim auctor sem ac vestibulum.
						Pellentesque non sem in nunc porttitor consectetur. Quisque quis mattis urna, et venenatis
						nibh. Etiam auctor quis velit in malesuada. Phasellus ut dui ut enim placerat bibendum nec
						eleifend dui. Phasellus ex orci, bibendum vitae mattis in, imperdiet eu quam. Vivamus sed
						consectetur lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis,
						ante nec consequat accumsan, odio arcu lacinia justo, sit amet gravida purus est vel leo.
						Etiam ac pretium nunc. Donec sit amet sagittis tortor.
					</p>
				</div>
			</app>

		</div>

		@if (app()->environment() == 'production')

			<!-- Global site tag (gtag.js) - Google Analytics -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-54122971-21"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'UA-54122971-21', { 'anonymize_ip': true });
			</script>

		@endif


		<script> var currentYear = {{ date('Y') }}; var ltp = !!{{ config('c.linkToPortfolio') ? 1 : 0 }}; </script>

		<script src="/js/manifest.js?v={{ config('assetversioning.app.js') }}"></script>
		<script src="/js/vendor.js?v={{ config('assetversioning.app.jsVendors') }}"></script>
		<script src="/js/app.js?v={{ config('assetversioning.app.js') }}"></script>

    </body>
</html>
