<script lang="ts">
	let is_navbar_toggled = $state(false);
</script>

<header>
	<nav class="navbar" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="/"> 筑波大自販機Map </a>
			<button
				class="navbar-burger"
				aria-label="menu"
				aria-expanded={is_navbar_toggled}
				data-target="navbar-content"
				tabindex="0"
				class:is-active={is_navbar_toggled}
				onclick={() => (is_navbar_toggled = !is_navbar_toggled)}
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
		</button>
		</div>
		<div id="navbar-content" class="navbar-menu" class:is-active={is_navbar_toggled}>
			<div class="navbar-start">
				<a href="/about" class="navbar-item">about</a>
				<a href="/contribute" class="navbar-item">このサイトに貢献する</a>
			</div>
			<div class="navbar-end">
				<a class="navbar-item" href="https://github.com/eniehack/itf-vendingmachine">GitHub</a>
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	@use 'bulma/sass/components/navbar';
</style>
