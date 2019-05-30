<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
	public function show()
	{
		return view('home')->with([
			'metaTitle' => $this->metaTitle(),
			'metaKeywords' => $this->metaKeywords(),
			'metaDescription' => $this->metaDescription()
		]);
	}

	public function show404()
	{
		abort(404);
	}

	public function sitemap(Request $request)
	{
		$content = view()->make('sitemap');

		return response()->make($content)->header('Content-Type', 'text/xml');
	}

	protected function metaTitle()
	{
		return "Simple Lorem Ipsum";
	}

	protected function metaKeywords()
	{
		return "simple lorem ipsum,simple lorem,lorem,ipsum,lorem ipsum,lorem ipsum dolor sit amet,lorem copy,lorem ipsum copy,simple lorem ipsum copy,lorem ipsum copy button,lorem ipsum with copy,lorem with copy,copy lorem ipsum,lorem ipsum generator,lorem ipsum paragraph,lorem ipsum text generator,dummy text generator,lorem ipsum dolor text,lorem ipsum dummy text";
	}

	protected function metaDescription()
	{
		return "Simple Lorem Ipsum with a copy button. Add paragraphs, remove paragraphs, expand or shrink them. What more could you ask for? :)";
	}
}
