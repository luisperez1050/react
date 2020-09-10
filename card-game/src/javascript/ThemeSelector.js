// $(document).ready(function() {
// 	if ($('input[type=checkbox]').is(':checked')) {
// 		$('body').addClass('dark-theme');
// 	}
// 	$('input[type=checkbox]').change(function() {
// 		if ($('input[type=checkbox]').is(':checked')) {
// 			$('body').addClass('dark-theme');
// 		} else {
// 			$('body').removeClass('dark-theme');
// 		}
//     });
// });



export function themeSelector() {
    const themeSelector = document.querySelector("input[type='checkbox']");
    const body = document.querySelector("body");
    console.log(themeSelector.checked);

    if (themeSelector.checked) body.classList.add("dark-theme");
    themeSelector.addEventListener('change', () => {
        (themeSelector.checked) ? body.classList.add("dark-theme") : body.classList.remove("dark-theme");
    })

}