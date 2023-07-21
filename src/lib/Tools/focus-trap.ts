type Props = { active: boolean };

export function trapFocus(node: HTMLElement, props: Props = { active: false }) {
	function focusable(): HTMLElement[] {
		return Array.from(
			node.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		).filter((element) => element.tabIndex !== -1);
	}

	function handleFocusin(event: FocusEvent) {
		const elements = focusable();
		const first = elements[0];
		const last = elements[elements.length - 1];

		if (event.target === last) {
			event.target.addEventListener('keydown', (evt) => {
				if ('key' in evt && evt.key === 'Tab' && 'shiftKey' in evt && !evt.shiftKey) {
					first.focus();
					evt.preventDefault();
				}
			});
		}

		if (event.target === first) {
			event.target.addEventListener('keydown', (evt) => {
				if ('key' in evt && evt.key === 'Tab' && 'shiftKey' in evt && evt.shiftKey) {
					last.focus();
					evt.preventDefault();
				}
			});
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Tab') {
			const elements = focusable();
			const first = elements[0];
			const last = elements[elements.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				last.focus();
				event.preventDefault();
			}

			if (!event.shiftKey && document.activeElement === last) {
				first.focus();
				event.preventDefault();
			}
		}
	}

	function setup(props: Props) {
		if (props.active) {
			focusable()[0]?.focus();
			console.log(focusable());
			node.addEventListener('focusin', handleFocusin);
			node.addEventListener('keydown', handleKeydown);
		} else {
			node.removeEventListener('focusin', handleFocusin);
			node.removeEventListener('keydown', handleKeydown);
		}
	}

	setup(props);

	return {
		update(props: Props) {
			setup(props);
		},
		destroy() {
			node.removeEventListener('focusin', handleFocusin);
			node.removeEventListener('keydown', handleKeydown);
		}
	};
}
