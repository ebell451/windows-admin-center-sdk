import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import {
    AppContextService,
    ByteUnitConverterPipe,
    CapacityBarChartComponent,
    CapacityBarChartUpdateData,
    CustomHorizontalBarChartData,
    HorizontalBarChartComponent
} from '@msft-sme/shell/angular';

@Component({
    selector: 'sme-ng2-controls-horizontal-bar-chart-example',
    template: `
      <h4>Multi-Bar Charts</h4>
      <p>Chart uses default height of 50px. However, the legend does take up some of those 50px. So the height here is set to 75px. No tooltips here.</p>
      <sme-horizontal-bar-chart [legend]="legend" [height]="75" [data]="multiBarData"></sme-horizontal-bar-chart>

      <p>Chart uses default height of 50px. No legend, but hover over the chart segments to see the tooltips.</p>
      <sme-horizontal-bar-chart [tooltips]="tooltips" [data]="multiBarData"></sme-horizontal-bar-chart>
    
      <p>Animated: moves on chart load and redraw.</p>
      <sme-horizontal-bar-chart [animation]="animation" [data]="multiBarData"></sme-horizontal-bar-chart>

      <h4>Two-Bar Capacity Charts</h4>
      <em>Capacity charts do not support chart tooltips or legends at this time! Label tooltips are supported.<em>
      <p>Tooltip for top label. Hover over ? icon to expose tooltip. At a future point in time, the tooltip will be dismissable, but for now it is dismissed by mouseleave on ? icon.
      <div class="col-md-24 clearfix">
          <div class="col-md-16">
              <sme-capacity-bar-chart (onTooltipToggle)="showCapacityLabelTooltip = !showCapacityLabelTooltip" [labelTooltip]="true" chartTitle="Capacity" [totalLabel]="100 | smeByteUnitConverter:1024" [usedLabel]="81 | smeByteUnitConverter:1024" [freeLabel]="19 | smeByteUnitConverter:1024" [totalCapacity]="100" [capacityUsed]="81"></sme-capacity-bar-chart>
          </div>
          <div *ngIf="showCapacityLabelTooltip" class="col-md-8">The component for tooltip will go here.</div>
          <!--TODO: make the tooltip dismissable and have that close the tooltip rather than a mosueleave event!-->
      </div>

      <sme-capacity-bar-chart chartTitle="Capacity Chart OK" [totalCapacity]="100" [capacityUsed]="79"></sme-capacity-bar-chart>

      <p>Chart uses default height of 50px. However, the legend does take up some of those 50px.</p>
      <sme-capacity-bar-chart chartTitle="Capacity Chart Warning" totalLabel="100 units" [totalCapacity]="100" [capacityUsed]="89"></sme-capacity-bar-chart>

      <p>Animated: moves on chart load and redraw.</p>
      <sme-capacity-bar-chart  chartTitle="Capacity Chart Critical" [animationTime]="1000" [totalLabel]="criticalChartTotal | smeByteUnitConverter:1024" [usedLabel]="criticalChartUsed | smeByteUnitConverter:1024" [freeLabel]="criticalChartFree | smeByteUnitConverter:1024" [totalCapacity]="criticalChartTotal" [capacityUsed]="criticalChartUsed" ></sme-capacity-bar-chart>

      <p> Warning threshold and Critical threshold have been disabled. The chart will always be blue.</p>
      <sme-capacity-bar-chart criticalAt="disabled"  chartTitle="Capacity Chart Critical and Warning Colors Disabled" [totalLabel]="criticalChartTotal | smeByteUnitConverter:1024" [usedLabel]="criticalChartUsed | smeByteUnitConverter:1024" [freeLabel]="criticalChartFree | smeByteUnitConverter:1024" [totalCapacity]="criticalChartTotal" [capacityUsed]="criticalChartUsed" ></sme-capacity-bar-chart>

      <p>This chart has no labels and no title. Warning threshold has been set to 25% instead of default 80%.</p>
      <sme-capacity-bar-chart [warningAt]="0.25"  [height]="25" [totalCapacity]="100" [capacityUsed]="25"></sme-capacity-bar-chart>

      <p>This chart has no labels and no title. Height changed to 10 px instead of default 50px. Critical threshold has been set to 12% instead of default 90%.</p>
      <sme-capacity-bar-chart [criticalAt]="0.12"  [height]="10" [totalCapacity]="100" [capacityUsed]="12"></sme-capacity-bar-chart>

      <h4>Redrawing Charts</h4>
      <p>Click this button to redraw the two charts below.</p>
      <button (click)="redrawCharts()">Redraw</button>
      <p>This chart updates with random data, without animation. </p>
      <sme-horizontal-bar-chart #chart1 [data]="multiBarData"></sme-horizontal-bar-chart>
      <p>Capacity chart updating with random data, and the animation occurs again on update.</p>
      <sme-capacity-bar-chart #chart2a [animationTime]="5000"  chartTitle="Random Data" [totalLabel]="randomTotal | smeByteUnitConverter:1024" [usedLabel]="randomUsed | smeByteUnitConverter:1024" [freeLabel]="randomFree | smeByteUnitConverter:1024" [totalCapacity]="randomTotal" [capacityUsed]="randomUsed"></sme-capacity-bar-chart>
      <p>Same Chart but without animation</p>
      <sme-capacity-bar-chart #chart2b chartTitle="Random Data" [totalLabel]="randomTotal | smeByteUnitConverter:1024" [usedLabel]="randomUsed | smeByteUnitConverter:1024" [freeLabel]="randomFree | smeByteUnitConverter:1024" [totalCapacity]="randomTotal" [capacityUsed]="randomUsed"></sme-capacity-bar-chart>
    `
})
export class HorizontalBarChartExampleComponent implements OnInit {
    public multiBarData: CustomHorizontalBarChartData;
    public randomData: CustomHorizontalBarChartData;
    public randomTotal: number;
    public randomUsed: number;
    public randomFree: number;
    public criticalChartTotal: number;
    public criticalChartUsed: number;
    public criticalChartFree: number;

    public legend: ChartLegendOptions;
    public tooltips: ChartTooltipOptions;
    public animation: ChartAnimationOptions;

    public showCapacityLabelTooltip = false;

    @ViewChild('chart1') private chart1: HorizontalBarChartComponent;
    @ViewChildren('chart2a, chart2b') private chart2QueryList: QueryList<CapacityBarChartComponent>;

    public byteUnitConverter = new ByteUnitConverterPipe();

    public static navigationTitle(appContextService: AppContextService, snapshot: ActivatedRouteSnapshot): string {
        return 'sme-horizontal-bar-chart';
    }

    /**
     * Gets random data to demonstrate chart refreshing
     */
    public getRandomDataForHorizontalBarChart(): number[] {
        let tmpTotal = 100;
        let tmpData0 = Math.floor(Math.random() * 30);
        let tmpData1 = Math.floor(Math.random() * 60);
        let tmpData2 = tmpTotal - tmpData0 - tmpData1;

        return [tmpData0, tmpData1, tmpData2];
    }

    public getRandomDataForCapacityChart(): CapacityBarChartUpdateData {
        let randomTotal = 10000000000 * Math.random();
        let randomUsed = Math.random() * randomTotal;
        let freeCapacity = randomTotal - randomUsed;
        let usedLabel = this.byteUnitConverter.transform(randomUsed, 1024);
        let freeLabel = this.byteUnitConverter.transform(freeCapacity, 1024);
        let totalLabel = this.byteUnitConverter.transform(randomTotal, 1024);

        return {
            totalCapacity: randomTotal,
            capacityUsed: randomUsed,
            usedLabel: usedLabel,
            freeLabel: freeLabel,
            totalLabel: totalLabel
        };
    }

    public redrawCharts(): void {
        let newHorizontalBarChartData = this.getRandomDataForHorizontalBarChart();
        this.chart1.update(newHorizontalBarChartData);

        let newCapacityData: CapacityBarChartUpdateData = this.getRandomDataForCapacityChart();

        this.chart2QueryList.forEach((chart: CapacityBarChartComponent) => {
            chart.update(newCapacityData);
        });
    }

    public getStartingData(): CustomHorizontalBarChartData {
        let total = 100;
        let data1 = 30;
        let data2 = 60;
        let data3 = total - data1 - data2;

        return {
            total: total,
            labels: [''],
            datasets: [
                {
                    label: 'bar 1',
                    backgroundColor: 'green',
                    data: [data1]
                },
                {
                    label: 'bar 2',
                    backgroundColor: 'orange',
                    data: [data2]
                },
                {
                    label: 'bar 3',
                    backgroundColor: 'black',
                    data: [data3]
                }
            ]
        };
    }

    public ngOnInit() {
        let randomCapacityData = this.getRandomDataForCapacityChart();
        this.randomTotal = randomCapacityData.totalCapacity;
        this.randomUsed = randomCapacityData.capacityUsed;
        this.randomFree = this.randomTotal - this.randomUsed;

        this.multiBarData = this.getStartingData();

        this.legend = { display: true };
        this.tooltips = { enabled: true };
        this.animation = { duration: 1000 };

        this.criticalChartTotal = 100000000000;
        this.criticalChartUsed = 90807000000;
        this.criticalChartFree = this.criticalChartTotal - this.criticalChartUsed;
    }
}
