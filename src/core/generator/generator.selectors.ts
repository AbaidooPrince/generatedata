import { createSelector } from 'reselect';

export const getRows = (state: any) => state.generator.rows;
export const getSortedRows = (state: any) => state.generator.sortedRows;

export const getNumRows = createSelector(
	getSortedRows,
	(rows) => rows.length
);

export const getSortedRowsArray = createSelector(
	getRows,
	getSortedRows,
	(rows, sorted) => sorted.map((id: string) => ({ ...rows[id], id }))
);

export const getRowsForExportType = createSelector(
    getSortedRowsArray,
    (rows) => {
        return rows.map(({ title, dataType, data }: any, colIndex: number) => ({ colIndex, title, dataType, data }))
    }
)
