import React, { useState } from "react";
import { Question_Props_Type } from "../Types/Quiz_Types";

const Question: React.FC<Question_Props_Type> = ({
	question,
	options,
	callback,
}) => {
	const [answer, setAnswer] = useState("");

	return (
		<div>
			<div className="question">
				<h4>{question}</h4>
			</div>
			<form
				onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, answer)}
			>
				{options.map((option: string, index: number) => {
					return (
						<div key={index} className="option">
							<label className="option-label">
								<input
									className="radio"
									type="radio"
									required
									value={option}
									checked={answer === option}
									onChange={(e: any) => setAnswer(e.target.value)}
								/>
								{option}
							</label>
						</div>
					);
				})}
				<input
					className="btn"
					type="submit"
					style={{ marginLeft: "45%", marginTop: 15 }}
				/>
			</form>
		</div>
	);
};

export default Question;
