<script lang="ts">
	import { base } from '$app/paths';
	import ogpImage from '$lib/assets/ogp.jpg';
</script>

<article class="prose">
	<h1 class="p-5 text-2xl font-bold">このサイトへ貢献する</h1>
	<section class="p-4">
		<h2 class="text-xl font-semibold">自動販売機の報告</h2>
		<p class="p-3">
			このサイトでは、自動販売機のデータ、地図データを<a
				class="text-sky-500 hover:underline"
				href="https://openstreetmap.org/">OpenStreetMap</a
			>から取得しています。
			OpenStreetMapにユーザ登録をして、自動販売機のデータを追加することもできます。
		</p>

		<!--<p>
            または、Twitterハッシュタグ <a href="https://twitter.com/hashtag/itf_vendingmachine_map">#itf_vendingmachinemap</a> 、<a href="https://twitter.com/hashtag/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6%E8%87%AA%E8%B2%A9%E6%A9%9FMap">#筑波大学自販機Map</a> を付けて投稿してください。その際は、「7A棟1F内」、「1A棟の1H棟・文サ館方面階段近く」などおおまかな場所を含め投稿してください。
        </p>-->
	</section>
	<section class="p-4">
		<h2 class="text-2xl font-semibold">開発に参加する</h2>
		<p class="p-3">
			このサイトは<a
				class="text-sky-500 hover:underline"
				href="https://github.com/eniehack/itf-vendingmachine">GitHub</a
			>にて、オープンソースソフトウェアとして公開されています。 Pull Request歓迎です。
		</p>
	</section>
	<section class="p-4">
		<h2 class="text-2xl font-semibold">バグ等の報告、機能の提案</h2>
		<p class="p-3">
			<a
				class="text-sky-500 hover:underline"
				href="https://github.com/eniehack/itf-vendingmachine/issues">GitHubのissue</a
			>から、または、Twitterハッシュタグ
			<a
				class="text-sky-500 hover:underline"
				href="https://twitter.com/hashtag/itf_vendingmachine_map">#itf_vendingmachinemap</a
			>
			、<a
				class="text-sky-500 hover:underline"
				href="https://twitter.com/hashtag/%E7%AD%91%E6%B3%A2%E5%A4%A7%E5%AD%A6%E8%87%AA%E8%B2%A9%E6%A9%9FMap"
				>#筑波大学自販機Map</a
			> を付けて投稿してください。
		</p>
	</section>
</article>
<svelte:head>
	<title>筑波大学 自販機 Map</title>
	<meta name="og:title" content="contribute | 筑波大学 自販機 Map" />
	<meta name="og:type" content="website" />
	<meta name="og:url" content="{base}/" />
	<meta name="og:locale" content="ja_JP" />
	<meta name="og:images" content={ogpImage} />
	<meta name="og:description" content="筑波大学構内の自動販売機の場所を一覧できるサイト" />
	<meta name="twitter:title" content="contribute | 筑波大学 自販機 Map" />
	<meta name="twitter:description" content="筑波大学構内の自動販売機の場所を一覧できるサイト" />
	<meta name="twitter:creators" content="@eniehack" />
	<meta name="twitter:card" content="summary" />
</svelte:head>
