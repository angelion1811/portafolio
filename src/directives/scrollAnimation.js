const animationScrollObserver = new IntersectionObserver(
	(entries, animationScrollObserver) =>{
		entries.forEach((entry) => {
			if(entry.isIntersecting){
				entry.target.classList.remove('inactive');
				animationScrollObserver.unobserve(entry.target);
			}
		});
	}
);


export default {
	bind(el){
		el.classList.add("inactive");
		animationScrollObserver.observe(el);
	}
}