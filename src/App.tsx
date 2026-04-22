import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";

import Icon from "./components/icon";

export default function App() {
	return (
		<div className="grid gap-3">
			<div className="flex flex-col gap-2">
				<Text variant="body-md-bold" className="text-pink-dark">
					Ola mundo
				</Text>

				<Text className="text-pink-light">Ola mundo</Text>

				<Text variant="body-sm-bold" className="text-gray-300">
					Ola mundo
				</Text>

				<Text>Levar o dog para passear</Text>
			</div>

			<div className="flex gap-1">
				<Icon svg={TrashIcon} className="fill-pink-dark" />
				<Icon svg={CheckIcon} className="fill-pink-dark" />
				<Icon svg={PencilIcon} className="fill-pink-dark" />
				<Icon svg={PlusIcon} className="fill-pink-dark" />
				<Icon svg={XIcon} className="fill-pink-dark" />
				<Icon svg={SpinnerIcon} animate />
			</div>
		</div>
	);
}
