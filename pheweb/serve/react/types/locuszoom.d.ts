/** Declaration file generated by dts-gen */
declare module 'locuszoom' {

    export interface Margin {
		top: number;
		right: number;
		bottom: number;
		left: number;
    };
    
    export interface Origin {
		x: number;
		y: number;
    };
    
    export class Dashboard {
	constructor(t: any);

	destroy(force: boolean): Dashboard;

	hide(): Dashboard;

	initialize(): Dashboard;

	position(): Dashboard;

	shouldPersist(): boolean;

	show(): Dashboard;

	update(): void;

    }

    export class DataLayer {
	constructor(layout: object, parent: Panel);

	addField(fieldName: string, nameSpace: string, transformations: string|string[]): string;

	applyAllElementStatus(): void;

	applyBehaviors(selection: any): void;

	applyCustomDataMethods(): DataLayer;

	applyDataMethods(): DataLayer;

	createTooltip(data: string|object): DataLayer;

	destroyAllTooltips(): DataLayer;

	destroyTooltip(element_or_id: string|object, temporary: boolean): DataLayer

	draw(): DataLayer;

	executeBehaviors(directive: string, behaviors: { action : string , status : string }): DataLayer;

	exportData(format?: string): string;

	fadeAllElements(): any;

	fadeElement(t: any, e: any): any;

	fadeElementsByFilters(t: any, e: any): any;

	filter(filters: any[], return_type: string): any[];

	filterElements(t: any): any[];

	filterIndexes(t: any): any[];

	getAbsoluteDataHeight(): number;

	getAxisExtent(dimension: string): number[];

	getBaseId(): string;

	getElementAnnotation(t: any, e: any): any;

	getElementById(id: string): object|null;

	getElementId(element: string|object): string;

	getElementStatusNodeId(element : string| object): string| null;

	getPageOrigin(): {x: number, y: number};

	getTicks(dimension: string, config: object): object[];

	hideAllElements(): any;

	hideElement(t: any, e: any): any;

	hideElementsByFilters(t: any, e: any): any;

	highlightAllElements(): any;

	highlightElement(t: any, e: any): any;

	highlightElementsByFilters(t: any, e: any): any;

	initialize(): DataLayer;

	moveDown(): DataLayer;

	moveUp(): DataLayer;

	positionAllTooltips(): DataLayer;

	positionTooltip(id: string): DataLayer;

	reMap(): Promise<void>;

	resolveScalableParameter<X,Y>(layout: Array<any>|number|string|object,
				      element_data: X,
				      data_index: number): Y;

	selectAllElements(): any;

	selectElement(t: any, e: any): any;

	selectElementsByFilters(t: any, e: any): any;

	setAllElementStatus(status: string, toogle: boolean): DataLayer;

	setElementAnnotation<T>(element: string|object, key: string, value : T): DataLayer;

	setElementStatus(status: string, element: string | object, active: boolean, exclusive: boolean): DataLayer;

	setElementStatusByFilters(status: string, toogle: boolean, filters: any[], exclusive: boolean): DataLayer;

	showOrHideTooltip(element: string | object, first_time: boolean): DataLayer;

	unfadeAllElements(): any;

	unfadeElement(t: any, e: any): any;

	unfadeElementsByFilters(t: any, e: any): any;

	unhideAllElements(): any;

	unhideElement(t: any, e: any): any;

	unhideElementsByFilters(t: any, e: any): any;

	unhighlightAllElements(): any;

	unhighlightElement(t: any, e: any): any;

	unhighlightElementsByFilters(t: any, e: any): any;

	unselectAllElements(): any;

	unselectElement(t: any, e: any): any;

	unselectElementsByFilters(t: any, e: any): any;

	updateTooltip(d: string|object, id: string): DataLayer;

	static DefaultLayout: {
            fields?: (string)[] | null;
            tooltip_positioning: string;
            type: string;
            x_axis?: LayoutAxis | null;
	    y_axis?: LayoutAxis | null;
	};

	static Statuses: {
            adjectives: string[];
            menu_antiverbs: string[];
            verbs: string[];
	};

    }


    export class DataSources {
	constructor();

	add(ns: string, x: Data.Source|Array<any>|null): DataSources;

	addSource(ns: string, x: string): DataSources;

	fromJSON(ns: string): DataSources;

	get(ns: string): Data.Source;

	getSource(ns: string): Data.Source;

	keys(): string[];

	remove(ns: string): DataSources;

	removeSource(ns: string): DataSources;

	set(ns: string, x: Data.Source): DataSources;

	toJSON(): string;

	sources : { [key: string]: Data.Source; }
    }

	
    export class Legend {
	constructor(t: any);

	hide(): void;

	position(): any;

	render(): any;

	show(): void;

	
	static DefaultLayout: {
            height: number;
            hidden: boolean;
            label_size: number;
            orientation: string;
            origin: Origin;
            padding: number;
            width: number;
	};

    }

    export class Panel {
	constructor(t: any, e: any, ...args: any[]);

	addBasicLoader(t: any): any;

	addDataLayer(t: any): any;

	clearSelections(): any;

	fadeAllElements(): any;

	fadeElementsByFilters(t: any, e: any): any;

	generateExtents(): any;

	generateTicks(i: any): any;

	getLinkedPanelIds(e: any): any;

	hideAllElements(): any;

	hideElementsByFilters(t: any, e: any): any;

	highlightAllElements(): any;

	highlightElementsByFilters(t: any, e: any): any;

	initialize(): any;

	initializeLayout(): any;

	moveDown(): any;

	moveUp(): any;

	reMap(): any;

	removeDataLayer(t: any): any;

	render(): any;

	renderAxis(i: any): any;

	resortDataLayers(): void;

	scaleHeightToData(a: any): void;

	selectAllElements(): any;

	selectElementsByFilters(t: any, e: any): any;

	setAllElementStatus(e: any, a: any): void;

	setDimensions(t: any, e: any): any;

	setElementStatusByFilters(e: any, a: any, i: any, s: any): void;

	setMargin(t: any, e: any, a: any, i: any): any;

	setOrigin(t: any, e: any): any;

	setTitle(t: any): any;

	unfadeAllElements(): any;

	unfadeElementsByFilters(t: any, e: any): any;

	unhideAllElements(): any;

	unhideElementsByFilters(t: any, e: any): any;

	unhighlightAllElements(): any;

	unhighlightElementsByFilters(t: any, e: any): any;

	unselectAllElements(): any;

	unselectElementsByFilters(t: any, e: any): any;

	static DefaultLayout: {
        axes: { x: { };
		y1: { };
		y2: { }; };
        background_click: string;
        cliparea: { height: number;
		    origin: Origin;
		    width: number; };
        dashboard: { components: any[]; };
        data_layers: any[];
        height: number;
        interaction: {
		drag_background_to_pan: boolean;
		drag_x_ticks_to_scale: boolean;
		drag_y1_ticks_to_scale: boolean;
		drag_y2_ticks_to_scale: boolean;
		scroll_to_zoom: boolean;
		x_linked: boolean;
		y1_linked: boolean;
		y2_linked: boolean;
            };
            legend: any;
            margin: Margin;
            min_height: number;
            min_width: number;
            origin: Origin;
            proportional_height?: number;
            proportional_origin: Origin;
            proportional_width: any;
            title: {
		style: {};
		text: string;
		x: number;
		y: number;
            };
            width: number;
            y_index: any;
	};

    }

    export class Plot {
	constructor(t: any, e: any, a: any);

	addPanel(t: any): any;

	applyState(t: any): any;

	clearPanelData(t: any, i: any): any;

	initialize(): any;

	initializeLayout(): any;

	positionPanels(): any;

	refresh(): any;

	removePanel(t: any): any;

	rescaleSVG(): any;

	setDimensions(t: any, e: any): any;

	startDrag(t: any, e: any): any;

	stopDrag(): any;

	subscribeToData(t: any, e: any, a: any): any;

	sumProportional(t: any): any;

	static DefaultLayout: {
            aspect_ratio: number;
            dashboard: {
		components: any[];
            };
            height: number;
            min_height: number;
            min_width: number;
            mouse_guide: boolean;
            panel_boundaries: boolean;
            panels: any[];
            responsive_resize: boolean;
            state: {
            };
            width: number;
	};

    }

    export const StandardLayout: {
		dashboard: {
			components: {
				position: string;
				subtitle: string;
				title: string;
				type: string;
				}[];
		};
	height: number;
	aspect_ratio: number;
	max_region_scale: number;
	min_region_scale: number;
	panels: {
            axes: { x: LayoutAxesLabel;
		    y1: LayoutAxesLabel;
		    y2: LayoutAxesLabel; };
            dashboard: {
		components: {
                    color: string;
                    group_position: string;
                    position: string;
                    type: string;
		}[];
            };
            data_layers: {
		id: string;
		offset: number;
		orientation: string;
		type: string;
            }[];
            height: number;
            id: string;
            inner_border: string;
            interaction: {
		drag_background_to_pan: boolean;
		drag_x_ticks_to_scale: boolean;
		drag_y1_ticks_to_scale: boolean;
		drag_y2_ticks_to_scale: boolean;
		scroll_to_zoom: boolean;
		x_linked: boolean;
            };
            legend: {
		hidden: boolean;
		orientation: string;
		origin: Origin;
            };
            margin: Margin;
            min_height: number;
            min_width: number;
            proportional_height: number;
            proportional_width: number;
            width: number;
	}[];
	responsive_resize: string;
	state: {
	};
	width: number;
    };

    export const ext: {
    };

    export const version: string;

    export function createCORSPromise(s: any, n: any, o?: any, r?: any, l?: any): any;

    export function generateCurtain(): any;

    export function generateLoader(): any;

    export function getToolTipData(t: any): any;

    export function getToolTipDataLayer(t: any): any;

    export function getToolTipPanel(t: any): any;

    export function getToolTipPlot(t: any): any;

    export function parseFields(e: any, t: any): any;

    export function parsePositionQuery(t: any): any;

    export function populate(t: any, a: any, i: any): any;

    export function populateAll(t: any, a: any, i: any): any;

    export function positionIntToString(t: any, e: any, a: any): any;

    export function positionStringToInt(t: any): any;

    export function prettyTicks(t: any, e: any, a: any): any;

    export function subclass(t: any, e: any, ...args: any[]): any;

    export namespace Dashboard {
	class Component {
            constructor(t: any, e: any);

            destroy(t: any): any;

            hide(): any;

            position(): any;

            shouldPersist(): any;

            show(): any;

            update(): void;

            static Button(t: any): void;

	}

	namespace Components {
            function add(t: any, e: any): void;

            function get(t: any, e: any, a: any): any;

            function list(): any;

            function set(t: any, e: any): void;

	}

    }

    export namespace Data {
	class AssociationSource {
            constructor(t: any);

            getURL(t: any, e: any, a: any): any;

            normalizeResponse(t: any): any;

            preGetData(t: any, e: any, a: any, i: any): any;

            static SOURCE_NAME: string;

	}

	class ConnectorSource {
            constructor(t: any);

            combineChainBody(t: any, e: any): void;

            getRequest(t: any, a: any, e: any): any;

            parseInit(t: any): void;

            parseResponse(t: any, e: any, a: any, i: any, s: any): any;

            static SOURCE_NAME: string;

	}

	class GeneConstraintSource {
            constructor(t: any);

            combineChainBody(e: any, t: any, a: any, i: any, s: any): any;

            fetchRequest(t: any, e: any, a: any): any;

            getCacheKey(t: any, e: any, a: any): any;

            getURL(): any;

            normalizeResponse(t: any): any;

            static SOURCE_NAME: string;

	}

	class GeneSource {
            constructor(t: any);

            extractFields(t: any, e: any, a: any, i: any): any;

            getURL(t: any, e: any, a: any): any;

            normalizeResponse(t: any): any;

            static SOURCE_NAME: string;

	}

	class GwasCatalog {
            constructor(t: any);

            combineChainBody(t: any, e: any, a: any, i: any, s: any): any;

            extractFields(t: any, e: any, a: any, i: any): any;

            findMergeFields(t: any): any;

            getURL(t: any, e: any, a: any): any;

            static SOURCE_NAME: string;

	}

	class LDSource {
            constructor(t: any);

            combineChainBody(t: any, e: any, a: any, i: any, s: any): any;

            findMergeFields(t: any, ...args: any[]): any;

            findRequestedFields(t: any, e: any): any;

            getRefvar(t: any, e: any, a: any): any;

            getURL(t: any, e: any, a: any): any;

            normalizeResponse(t: any): any;

            preGetData(t: any, e: any): void;

            static SOURCE_NAME: string;

	}

	class LDSource2 {
            constructor(...args: any[]);

            fetchRequest(t: any, e: any, a: any): any;

            getURL(t: any, e: any, a: any): any;

            static SOURCE_NAME: string;

	}

	class PheWASSource {
            constructor(t: any);

            getURL(t: any, e: any, a: any): any;

            static SOURCE_NAME: string;

	}

	class RecombinationRateSource {
            constructor(t: any);

            getURL(t: any, e: any, a: any): any;

            static SOURCE_NAME: string;

	}

	class Parameter {

	}
	class Source {
            constructor();
			params : ({ [key: string ]: string; } | Parameter)

            annotateData(records : Object[], chain : Object) : Object[]|Promise<Object>;

            combineChainBody(t: any, e: any, a: any, i: any, s: any): any;

            extractFields(data : Object[], fields : string[], outnames : string[], trans: ((v : any)=>any)[]) : object[];

            fetchRequest (state: Object, chain: any, fields: any): Promise<any>;

			getCacheKey: (state: Object, chain: any, fields: any) => string | undefined;

			getData: (state : Object, fields : string[], outnames : string[], trans: ((v : any)=>any)[] ) => any;

			getRequest: (state: Object, chain: any, fields: any) => string | undefined;

			getURL: (state: Object, chain: any, fields: any) => string | undefined;

            normalizeResponse(data : Object[]|Object) : any;

            parseArraysToObjects(t: any, e: any, a: any, i: any): any;

            parseData(t: any, e: any, a: any, i: any): any;

            parseInit(init : string | { url : string , params : string}) : void;

            parseObjectsToObjects(t: any, e: any, a: any, i: any): any;

            parseResponse(resp : string | object, chain: Object, fields : string[], outnames : string[], trans: ((v : any)=>any)[] ) : Promise<{header: any, discrete: any, body: object[]}>;

            prepareData(t: any): any;

            toJSON(): JSON;

            static extend(constructorFun: (init : any) => void, uniqueName: string, base?: (string| any )): any;
	
	}

	class StaticSource {
            constructor(t: any);

            getRequest(t: any, e: any, a: any): any;

            toJSON(): any;

            static SOURCE_NAME: string;

	}

	function Field(t: any): any;

	function Requester(l: any): any;

    }

    export namespace DataLayers {
	function add(t: any, e: any): void;

	function extend(t: any, e: any, a: any): any;

	function get(t: any, e: any, a: any): any;

	function list(): any;

	function set(t: any, e: any): void;

    }

    export namespace KnownDataSources {
	function add(t: any): void;

	function clear(): void;

	function create(t: any, ...args: any[]): any;

	function extend(t: any, e: any, a: any): any;

	function get(t: any): any;

	function getAll(): any;

	function list(): any;

	function push(t: any): void;

	function setAll(t: any): void;

    }

    export namespace Layouts {
	function add(t: any, e: any, a: any): any;

	function get(t: any, e: any, a: any): any;

	function list(t: any): any;

	function merge(t: any, e: any): any;

	function set(t: any, e: any, a: any): any;

    }

    export namespace ScaleFunctions {
	function add(t: any, e: any): void;

	function get(t: any, e: any, a: any, i: any): any;

	function list(): any;

	function set(t: any, e: any): void;

    }

    export namespace TransformationFunctions {
	function add(t: any, e: any): void;

	function get(t: any): any;

	function list(): any;

	function set(t: string, e: (x : number) => number | string): void;

    }

    export interface Layout {
		height?: number;
		width?: number;
		responsive_resize?: string;
		id?: string;
		title?: LayoutTitle;
		proportional_height?: number;
		min_width: number;
		min_height: number;
		y_index?: number;
		margin?: Margin;
		inner_border?: string;
		dashboard: LayoutDashboard;
		axes? : LayoutAxes;
		legend?: LayoutLegend;
		interaction?: LayoutInteraction;
		data_layers?: (LayoutDataLayersEntity)[] | null;
		description?: string | null;
	        origin?: Origin;
	        proportional_origin?: Origin;
		background_click?: string;
		resizable?: string;
		min_region_scale?: number;
		max_region_scale?: number;
		panel_boundaries?: boolean;
		mouse_guide?: boolean;
		panels?: LayoutPanel[]
	}

	export interface LayoutPanel {

	}

    export interface LayoutTitle {
		text: string;
		x: number;
		y: number;
	}

    export interface LayoutDashboard {
		components?: (LayoutComponentsEntity)[] | null;
	}

    export interface LayoutComponentsEntity {
		type: string;
		position?: string;
		color?: string;
		title?: string;
		text?: string;
		url?: string;
		direction?: number;
		group_position?: string;
		button_html?: string;
		step?: number;
	}

    export interface LayoutAxes {
		x: LayoutAxesLabel;
		y1: LayoutAxesLabel;
	}

    export interface LayoutAxesLabel {
		extent?: string;
		label?: string;
		label_function?: null | string;
		label_offset?: number;
		render?: boolean;
		tick_format?: string;
    }

    export interface LayoutLegend {
		orientation: string;
	        origin: Origin;
		hidden: boolean;
		width: number;
		height: number;
		padding: number;
		label_size: number;
	}

    export interface LayoutInteraction {
		drag_background_to_pan: boolean;
		drag_x_ticks_to_scale: boolean;
		drag_y1_ticks_to_scale: boolean;
		drag_y2_ticks_to_scale: boolean;
		scroll_to_zoom: boolean;
		x_linked: boolean;
		y1_linked: boolean;
		y2_linked: boolean;
	}

    export interface LayoutDataLayersEntity {
		behaviors?: LayoutBehaviors | null;
		color?: ( | string)[] | null;
		fields?: (string)[] | null;
		fill_opacity?: number | null;
		id: string;
		id_field?: string | null;
		legend?: (LayoutLegendEntity)[] | null;
		namespace?: LayoutNamespace | null;
		offset?: number | null;
		orientation?: string | null;
		point_shape?: LayoutPointShape | null;
		point_size?: LayoutPointSize | null;
		tooltip?: LayoutTooltip | null;
		transition?: boolean | null;
		type: string;
		x_axis?: LayoutAxis | null;
		y_axis?: LayoutAxis | null;
	}

    export interface LayoutNamespace {
		conditional?: string;
		association?: string;
		ld?: string;
	}

    export interface LayoutPointShape {
		scale_function: string;
		field: string;
		parameters: LayoutParameters;
	}

    export interface LayoutParameters {
		categories?: (string)[] | null;
		values?: (string)[] | null;
		null_value: string;
	}

    export interface LayoutPointSize {
		scale_function: string;
		field: string;
		parameters: LayoutPointSizeParameters;
	}

    export interface LayoutPointSizeParameters {
		categories?: (string)[] | null;
		values?: (number)[] | null;
		null_value: number;
	}

    export interface LayoutLegendEntity {
		shape: string;
		color: string;
		size: number;
		label: string;
		class: string;
	}

    export interface LayoutBehaviors {
		onmouseover?: (LayoutOnmouseoverEntityOrOnmouseoutEntity)[] | null;
		onmouseout?: (LayoutOnmouseoverEntityOrOnmouseoutEntity)[] | null;
		onclick?: (LayoutOnclickEntity)[] | null;
	}

    export interface LayoutOnmouseoverEntityOrOnmouseoutEntity {
		action: string;
		status: string;
	}

    export interface LayoutOnclickEntity {
		action: string;
		href?: string;
	}

    export interface LayoutTooltip {
		closable: boolean;
		show: LayoutShow;
		hide: LayoutHide;
		html: string;
	}

    export interface LayoutShow { or?: (string)[] | null; }

    export interface LayoutHide { and?: (string)[] | null; }

    export interface LayoutAxis {
		field: string;
		axis: number;
	        floor?: number;
	        lower_buffer?: number;
	        upper_buffer?: number;
		min_extent?: (number)[] | null;
    }

}
