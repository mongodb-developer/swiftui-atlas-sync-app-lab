//
//  TodayView.swift
//  GoodHabitsRealmApp
//
//  Created by Diego Freniche Brito on 24/8/23.
//

import SwiftUI
import RealmSwift

struct DaysView: View {
    @ObservedResults(Day.self) var days
    @Environment(\.realm) var realm

    var body: some View {
        NavigationStack {
            List {
                ForEach(days) { day in
                    NavigationLink(destination: TrackDailyHabitsView(day: day)) {
                        DayCellView(day: day)
                    }
                }
                .onDelete(perform: $days.remove)
            }
            .scrollContentBackground(.hidden)
            .navigationTitle("All Days")
            .navigationBarItems(trailing: EditButton())
            .toolbar {
                ToolbarItem(placement: .bottomBar) {
                    Button(action: {
                        let day = Day.createDayWithHabitsInRealm(realm: realm)

                        try? realm.write({
                            $days.append(day)
                        })
                    }) {
                        Image(systemName: "plus.circle.fill")
                            .resizable()
                            .frame(width: 50.0, height: 50.0)
                    }
                }
            }
        }
    }
}

struct DayCellView: View {
    @ObservedRealmObject var day: Day

    var body: some View {
        VStack(alignment: .leading) {
            Text("\(day.date.formatted(date: .abbreviated, time: .omitted))").font(.title)
        }.padding()
    }
}

struct DaysView_Previews: PreviewProvider {
    static var previews: some View {
        DaysView()
    }
}
