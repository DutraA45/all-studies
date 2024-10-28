import { render, screen } from "@testing-library/react";
import { Movies } from "./Movies";
import { renderWithProviders } from "../../utils/test/renderWithProviders";

jest.mock("../../hooks/useMovies", () => ({
	useMovies: () => ({
		data: [
			{
				id: 1,
				title: "Filme sobre o React",
				poster_path: "image.png",
			},
		],
	}),
}));

describe("<Movies />", () => {
	// it("❌ teste falhando - renderiza o componente de Movies", () => {
	// 	const { container } = render(<Movies />);
	// 	expect(container).toBeInTheDocument();
	// });

	it("✅ teste correto - renderiza o componente de Movies", () => {
		const { container } = renderWithProviders(<Movies />, {});
		expect(container).toBeInTheDocument();
	});

	it("renderiza um filme no componente", () => {
		renderWithProviders(<Movies />, {});
		expect(screen.getByText("Filme sobre o React")).toBeInTheDocument();
	});
});
